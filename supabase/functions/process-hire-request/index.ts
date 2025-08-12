
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Configuration, OpenAIApi } from "https://esm.sh/openai@3.2.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface HireRequest {
  talent: {
    id: string;
    full_name: string;
    professional_title: string;
    email?: string;
  };
  requester: {
    name: string;
    email: string;
    id?: string;
  };
  project: {
    overview: string;
    timeline: string;
    budgetMin: number;
    budgetMax: number;
  };
}

interface EnhancedContent {
  summary: string;
  projectType: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    
    const requestData: HireRequest = await req.json();
    const { talent, requester, project } = requestData;
    
    // Format budget for display
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`;
    
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (openAiKey) {
      try {
        const configuration = new Configuration({
          apiKey: openAiKey,
        });
        const openai = new OpenAIApi(configuration);
        
        const prompt = `
          Project Overview: "${project.overview}"
          
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
          
          Format your response as JSON:
          {
            "summary": "Brief summary here",
            "projectType": "Project type here"
          }
        `;
        
        const completion = await openai.createCompletion({
          model: "gpt-3.5-turbo-instruct",
          prompt,
          max_tokens: 150,
          temperature: 0.3,
        });
        
        const responseText = completion.data.choices[0]?.text || "";
        
        try {
          // Extract JSON from the response
          const jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            enhancedContent = JSON.parse(jsonMatch[0]);
            console.log("Enhanced content generated:", enhancedContent);
          }
        } catch (jsonError) {
          console.error("Error parsing AI response:", jsonError);
          // Continue without enhanced content
        }
      } catch (aiError) {
        console.error("Error generating enhanced content:", aiError);
        // Continue without enhanced content
      }
    }
    
    // 2. Store the request in the database
    const { data: requestRecord, error: requestError } = await supabase
      .from('hire_requests')
      .insert([
        {
          talent_id: talent.id,
          requester_id: requester.id || null, // May be null if user is not authenticated
          requester_name: requester.name,
          requester_email: requester.email,
          project_overview: project.overview,
          project_summary: enhancedContent?.summary || null,
          project_type: enhancedContent?.projectType || null,
          timeline: project.timeline,
          budget_min: project.budgetMin,
          budget_max: project.budgetMax,
          budget_display: budgetDisplay,
          status: 'new',
          expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        }
      ])
      .select();
      
    if (requestError) {
      throw new Error(`Error storing hire request: ${requestError.message}`);
    }
    
    // 3. Create notification for the admin
    // Fetch admin users
    const { data: adminUsers, error: adminError } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_type', 'admin')
      .limit(1);
      
    if (adminError) {
      console.error("Error fetching admin users:", adminError);
    }
    
    let adminId: string | undefined = undefined;
    
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id;
      
      const adminNotificationContent = {
        title: `New hiring request for ${talent.full_name}`,
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,
        type: "hire_request",
        related_id: requestRecord[0].id
      };
      
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId,
          _title: adminNotificationContent.title,
          _message: adminNotificationContent.message,
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id
        });
        
      if (notificationError) {
        console.error("Error creating admin notification:", notificationError);
      }
    }
    
    // 4. Send email notification to talent
    if (talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase.functions.invoke('send-email', {
        body: {
          to: talent.email,
          subject: `New Project Request from ${requester.name}`,
          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent.full_name},</p>
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${project.overview}</p>
            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
          `,
        },
      });
      
      console.log("Email sending result:", emailResponse);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Hire request processed successfully",
        request_id: requestRecord[0].id
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error processing hire request:", error.message);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
