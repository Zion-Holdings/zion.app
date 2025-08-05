import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    personalInfo,
    experience,
    education,
    skills,
    certifications,
    languages,
    projects,
    achievements,
    template
  } = req.body;

  // Mock AI generation (replace with real AI integration as needed
  const resume = `
    <div style="font-family: 'Arial', sans-serif; max-width: 800px; margin: auto; padding: 20px; background: white; color: #333;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #e0e0e0; padding-bottom: 20px;">
        <h1 style="color: #2c3e50; margin: 0; font-size: 32px; font-weight: bold;">
          ${personalInfo.firstName} ${personalInfo.lastName}
        </h1>
        <p style="color: #7f8c8d; margin: 5px 0; font-size: 16px;">${personalInfo.position || 'Professional'}</p>
        <div style="margin-top: 10px;">
          ${personalInfo.email ? `<p style="color: #7f8c8d; margin: 2px 0; font-size: 14px;">📧 ${personalInfo.email}</p>` : ''}
          ${personalInfo.phone ? `<p style="color: #7f8c8d; margin: 2px 0; font-size: 14px;">📞 ${personalInfo.phone}</p>` : ''}
          ${personalInfo.location ? `<p style="color: #7f8c8d; margin: 2px 0; font-size: 14px;">📍 ${personalInfo.location}</p>` : ''}
          ${personalInfo.linkedin ? `<p style="color: #7f8c8d; margin: 2px 0; font-size: 14px;">🔗 ${personalInfo.linkedin}</p>` : ''}
          ${personalInfo.website ? `<p style="color: #7f8c8d; margin: 2px 0; font-size: 14px;">🌐 ${personalInfo.website}</p>` : ''}
        </div>
      </div>

      <!-- Summary -->
      ${personalInfo.summary ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #2c3e50; margin: 0 0 10px 0; font-size: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px;">Professional Summary</h2>
          <p style="color: #2c3e50; margin: 0; line-height: 1.6;">${personalInfo.summary}</p>
        </div>
      ` : ''}

      <!-- Experience -->
      ${experience.length > 0 ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px;">Professional Experience</h2>
          ${experience.map((exp: any) => `
            <div style="margin-bottom: 20px;">
              </div><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <h3 style="color: #2c3e50; margin: 0; font-size: 18px; font-weight: bold;">${exp.position}</h3>
                <span style="color: #7f8c8d; font-size: 14px;">
                  ${exp.startDate ? new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : ''} - 
                  ${exp.current ? 'Present' : (exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '')}
                </span>
              </div>
              <p style="color: #7f8c8d; margin: 0 0 10px 0; font-size: 16px; font-weight: 500;">${exp.company}</p>
              ${exp.description ? `<p style="color: #2c3e50; margin: 0 0 10px 0; line-height: 1.6;">${exp.description}</p>` : ''}
              ${exp.achievements.length > 0 ? `
                <ul style="margin: 0; padding-left: 20px;">
                  ${exp.achievements.filter((a: string) => a.trim()).map((achievement: string) => `
                    <li style="color: #2c3e50; margin-bottom: 5px; line-height: 1.6;">${achievement}</li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Education -->
      ${education.length > 0 ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px;">Education</h2>
          ${education.map((edu: any) => `
            <div style="margin-bottom: 20px;">
              </div><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <h3 style="color: #2c3e50; margin: 0; font-size: 18px; font-weight: bold;">${edu.degree} ${edu.field ? `in ${edu.field}` : ''}</h3>
                <span style="color: #7f8c8d; font-size: 14px;">
                  ${edu.startDate ? new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : ''} - 
                  ${edu.current ? 'Present' : (edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '')}
                </span>
              </div>
              <p style="color: #7f8c8d; margin: 0 0 10px 0; font-size: 16px; font-weight: 500;">${edu.institution}</p>
              ${edu.description ? `<p style="color: #2c3e50; margin: 0; line-height: 1.6;">${edu.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Skills -->
      ${skills.length > 0 ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px;">Skills</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${skills.map((skill: any) => `
              <span style="background: #f8f9fa; color: #2c3e50; padding: 5px 12px; border-radius: 15px; font-size: 14px; border: 1px solid #e0e0e0;">
                ${skill.name} ${skill.level !== 'intermediate' ? `(${skill.level})` : ''}
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Certifications -->
      ${certifications.filter((c: string) => c.trim()).length > 0 ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px;">Certifications</h2>
          <ul style="margin: 0; padding-left: 20px;">
            ${certifications.filter((c: string) => c.trim()).map((cert: string) => `
              <li style="color: #2c3e50; margin-bottom: 5px; line-height: 1.6;">${cert}</li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Languages -->
      ${languages.filter((l: string) => l.trim()).length > 0 ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px;">Languages</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${languages.filter((l: string) => l.trim()).map((lang: string) => `
              <span style="background: #f8f9fa; color: #2c3e50; padding: 5px 12px; border-radius: 15px; font-size: 14px; border: 1px solid #e0e0e0;">
                ${lang}
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Projects -->
      ${projects.filter((p: string) => p.trim()).length > 0 ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px;">Projects</h2>
          <ul style="margin: 0; padding-left: 20px;">
            ${projects.filter((p: string) => p.trim()).map((project: string) => `
              <li style="color: #2c3e50; margin-bottom: 5px; line-height: 1.6;">${project}</li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Achievements -->
      ${achievements.filter((a: string) => a.trim()).length > 0 ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px;">Achievements</h2>
          <ul style="margin: 0; padding-left: 20px;">
            ${achievements.filter((a: string) => a.trim()).map((achievement: string) => `
              <li style="color: #2c3e50; margin-bottom: 5px; line-height: 1.6;">${achievement}</li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Footer -->
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #7f8c8d; font-size: 12px;">
        <p style="margin: 0;">Generated by Zion Marketplace AI Resume Builder</p>
        <p style="margin: 5px 0;">Template: ${template.charAt(0).toUpperCase() + template.slice(1)}</p>
      </div>
    </div>
  `;

  res.status(200).json({ resume });
} )