
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "";
  
  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { applicationId } = await req.json();
    
    if (!applicationId) {
      throw new Error("Application ID is required");
    }

    // 1. Fetch the application with job details and resume content
    const { data: application, error: appError } = await supabase
      .from("job_applications")
      .select(`
        id,
        job_id,
        talent_id,
        cover_letter,
        resume_id,
        job:jobs(title, description, skills),
        talent_profile:profiles!talent_id(bio, skills)
      `)
      .eq("id", applicationId)
      .single();

    if (appError) {
      throw new Error(`Failed to fetch application: ${appError.message}`);
    }

    if (!application) {
      throw new Error("Application not found");
    }

    // 2. Fetch resume details if a resume_id is provided
    let resumeContent = "";
    let resumeSkills: string[] = [];
    let resumeCerts: string[] = [];
    
    if (application.resume_id) {
      const { data: resume, error: resumeError } = await supabase
        .from("talent_resumes")
        .select(`
          summary,
          headline,
          resume_skills!inner(name, category, years_experience),
          work_history!inner(company_name, role_title, start_date, end_date, description),
          education!inner(institution, degree, field_of_study),
          certifications!inner(name, issuing_organization)
        `)
        .eq("id", application.resume_id)
        .single();
        
      if (resumeError) {
        console.error("Error fetching resume:", resumeError);
      } else if (resume) {
        // Format resume content for analysis
        resumeContent = `
          Summary: ${resume.summary || ""}
          Headline: ${resume.headline || ""}
          
          Work Experience:
          ${resume.work_history.map((job: any) => 
            `${job.role_title} at ${job.company_name} (${new Date(job.start_date).getFullYear()} - ${job.end_date ? new Date(job.end_date).getFullYear() : 'Present'})
            ${job.description || ""}`
          ).join("\n\n")}
          
          Education:
          ${resume.education.map((edu: any) =>
            `${edu.degree} in ${edu.field_of_study || ""} from ${edu.institution}`
          ).join("\n")}

          Skills:
          ${resume.resume_skills.map((skill: any) => skill.name).join(", ")}

          Certifications:
          ${resume.certifications.map((cert: any) => `${cert.name} from ${cert.issuing_organization}`).join(", ")}
        `;
        
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name);
        resumeCerts = resume.certifications.map((cert: any) => cert.name);
      }
    }
    
    // 3. If no resume content, use talent profile and cover letter
    if (!resumeContent) {
      resumeContent = `
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}
        Skills: ${application.talent_profile?.skills?.join(", ") || ""}
      `;
      resumeSkills = application.talent_profile?.skills || [];
      resumeCerts = [];
    }

    // 4. Prepare job details
    const jobTitle = application.job?.title || "";
    const jobDescription = application.job?.description || "";
    const jobSkills = application.job?.skills || [];

    // 5. Process using OpenAI to calculate match score
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are an expert resume analyzer that compares candidate resumes to a job description. Focus on required skills, minimum experience level, and any certifications mentioned in the job.`
          },
          {
            role: "user",
            content: `
            # Job Details
            Title: ${jobTitle}
            Description: ${jobDescription}
            Required Skills: ${jobSkills.join(", ")}

            Candidate Certifications: ${resumeCerts.join(", ")}

            # Resume Content
            ${resumeContent}

            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)
            2. A brief summary of why this score was given (1-2 sentences)
            3. A detailed breakdown of how well the candidate's skills, experience, and certifications align with job requirements
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match"
            
            Respond in JSON format with the following structure:
            {
              "score": 75,
              "summary": "Good match with relevant experience in required technologies.",
              "breakdown": {
                "skills_match": {
                  "score": 80,
                  "matching": ["skill1", "skill2"],
                  "missing": ["skill3"]
                },
                "experience_match": {
                  "score": 70,
                  "analysis": "Candidate has X years experience in relevant field."
                },
                "certifications_match": {
                  "score": 50,
                  "matching": ["cert1"],
                  "missing": ["cert2"]
                },
                "education_match": {
                  "score": 65,
                  "analysis": "Candidate has relevant degree."
                }
              },
              "suggestion": "Recommended for Review"
            }`
          }
        ],
        temperature: 0.5,
      }),
    });

    if (!openAIResponse.ok) {
      const errorData = await openAIResponse.json();
      throw new Error(`OpenAI API Error: ${JSON.stringify(errorData)}`);
    }

    const aiResult = await openAIResponse.json();
    let matchResult;
    
    try {
      // Extract JSON from the response
      const content = aiResult.choices[0].message.content;
      matchResult = JSON.parse(content);
      
      // Validate required fields
      if (!matchResult.score || !matchResult.summary || !matchResult.suggestion) {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error parsing AI response:", error);
      throw new Error("Failed to parse AI analysis results");
    }

    // 6. Update the application with the match results
    const { error: updateError } = await supabase
      .from("job_applications")
      .update({
        match_score: matchResult.score,
        match_summary: matchResult.summary,
        match_breakdown: matchResult.breakdown,
        match_suggestion: matchResult.suggestion,
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId);

    if (updateError) {
      throw new Error(`Failed to update application with score: ${updateError.message}`);
    }

    // 7. Return the match results
    return new Response(
      JSON.stringify({ 
        success: true, 
        matchResult 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error in resume-scorer function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
