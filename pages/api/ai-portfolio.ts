import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, title, bio, skills, experience, projects, testimonials, contact, image } = req.body;

  // Mock AI generation (replace with real AI integration as needed)
  const portfolioHtml = `
    <div style="font-family: sans-serif; max-width: 700px; margin: auto;">
      ${image ? `<img src="${image}" alt="${name}" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: 16px;" />` : ''}
      <h1 style="font-size: 2.2em; margin-bottom: 0.2em;">${name}</h1>
      <h2 style="font-size: 1.3em; color: #a855f7; margin-bottom: 1em;">${title}</h2>
      <p style="line-height: 1.6; margin-bottom: 2em;">${bio}</p>
      
      ${skills ? `
        <section style="margin-bottom: 2em;">
          <h3 style="color: #333; margin-bottom: 1em;">Skills</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${skills.map((skill: string) => `<span style="background: #f3f4f6; padding: 4px 12px; border-radius: 16px; font-size: 0.9em;">${skill}</span>`).join('')}
          </div>
        </section>
      ` : ''}
      
      ${experience ? `
        <section style="margin-bottom: 2em;">
          <h3 style="color: #333; margin-bottom: 1em;">Experience</h3>
          ${experience.map((exp: any) => `
            <div style="margin-bottom: 1em;">
              <h4 style="margin-bottom: 0.5em;">${exp.title} at ${exp.company}</h4>
              <p style="color: #666; font-size: 0.9em; margin-bottom: 0.5em;">${exp.period}</p>
              <p style="line-height: 1.5;">${exp.description}</p>
            </div>
          `).join('')}
        </section>
      ` : ''}
      
      ${projects ? `
        <section style="margin-bottom: 2em;">
          <h3 style="color: #333; margin-bottom: 1em;">Projects</h3>
          ${projects.map((project: any) => `
            <div style="margin-bottom: 1.5em; padding: 1em; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h4 style="margin-bottom: 0.5em;">${project.name}</h4>
              <p style="color: #666; margin-bottom: 0.5em;">${project.technologies?.join(', ')}</p>
              <p style="line-height: 1.5;">${project.description}</p>
              ${project.link ? `<a href="${project.link}" style="color: #a855f7; text-decoration: none;">View Project</a>` : ''}
            </div>
          `).join('')}
        </section>
      ` : ''}
      
      ${testimonials ? `
        <section style="margin-bottom: 2em;">
          <h3 style="color: #333; margin-bottom: 1em;">Testimonials</h3>
          ${testimonials.map((testimonial: any) => `
            <blockquote style="border-left: 4px solid #a855f7; padding-left: 1em; margin: 1em 0; font-style: italic;">
              "${testimonial.quote}"
              <footer style="margin-top: 0.5em; font-weight: bold;">— ${testimonial.author}</footer>
            </blockquote>
          `).join('')}
        </section>
      ` : ''}
      
      ${contact ? `
        <section style="margin-top: 2em; padding-top: 2em; border-top: 1px solid #e5e7eb;">
          <h3 style="color: #333; margin-bottom: 1em;">Contact</h3>
          <p style="margin: 0.5em 0;">Email: ${contact.email}</p>
          ${contact.phone ? `<p style="margin: 0.5em 0;">Phone: ${contact.phone}</p>` : ''}
          ${contact.linkedin ? `<p style="margin: 0.5em 0;">LinkedIn: <a href="${contact.linkedin}" style="color: #a855f7;">${contact.linkedin}</a></p>` : ''}
          ${contact.github ? `<p style="margin: 0.5em 0;">GitHub: <a href="${contact.github}" style="color: #a855f7;">${contact.github}</a></p>` : ''}
        </section>
      ` : ''}
    </div>
  `

  return res.status(200).json({
    success: true,
    portfolioHtml,
    portfolioData: {
      name,
      title,
      bio,
      skills,
      experience,
      projects,
      testimonials,
      contact,
      image
    }
  });
}