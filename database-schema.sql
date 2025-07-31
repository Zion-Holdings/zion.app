-- Zion AI Marketplace Talent System Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Talents table
CREATE TABLE IF NOT EXISTS talents (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    summary TEXT NOT NULL,
    skills TEXT[] NOT NULL DEFAULT '{}',
    availability VARCHAR(50) NOT NULL DEFAULT 'Open' CHECK (availability IN ('Open', 'Part-time', 'Booked')),
    hourly_rate INTEGER,
    location VARCHAR(255) NOT NULL,
    timezone VARCHAR(50) NOT NULL,
    profile_picture VARCHAR(500),
    is_verified BOOLEAN DEFAULT FALSE,
    rating DECIMAL(3,2),
    is_new BOOLEAN DEFAULT TRUE,
    portfolio VARCHAR(500),
    video_intro VARCHAR(500),
    experience_years INTEGER,
    education TEXT,
    certifications TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Talent reviews table
CREATE TABLE IF NOT EXISTS talent_reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    talent_id UUID NOT NULL REFERENCES talents(id) ON DELETE CASCADE,
    client_name VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    talent_id UUID NOT NULL REFERENCES talents(id) ON DELETE CASCADE,
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    project_description TEXT NOT NULL,
    budget VARCHAR(100),
    timeline VARCHAR(100),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'hired', 'declined')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_talents_availability ON talents(availability);
CREATE INDEX IF NOT EXISTS idx_talents_skills ON talents USING GIN(skills);
CREATE INDEX IF NOT EXISTS idx_talents_location ON talents(location);
CREATE INDEX IF NOT EXISTS idx_talents_created_at ON talents(created_at);
CREATE INDEX IF NOT EXISTS idx_talents_rating ON talents(rating);
CREATE INDEX IF NOT EXISTS idx_talent_reviews_talent_id ON talent_reviews(talent_id);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_talent_id ON contact_inquiries(talent_id);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_talents_updated_at BEFORE UPDATE ON talents
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for testing
INSERT INTO talents (
    full_name, title, summary, skills, availability, hourly_rate, location, timezone, is_verified, rating, experience_years, education, certifications
) VALUES 
(
    'Sarah Chen',
    'Senior Full Stack Developer',
    'Experienced full-stack developer with 8+ years building scalable web applications. Specialized in React, Node.js, and cloud technologies. Led development teams at multiple startups and delivered projects for Fortune 500 companies.',
    ARRAY['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'],
    'Open',
    85,
    'San Francisco, CA',
    'UTC-08:00',
    true,
    4.8,
    8,
    'Bachelor of Computer Science, Stanford University',
    ARRAY['AWS Certified Solutions Architect', 'Google Cloud Professional']
),
(
    'Michael Rodriguez',
    'AI/ML Engineer',
    'Passionate AI engineer with expertise in machine learning, deep learning, and computer vision. Built production ML systems for healthcare, finance, and e-commerce. Published research in top AI conferences.',
    ARRAY['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Docker', 'Kubernetes', 'AWS'],
    'Part-time',
    120,
    'New York, NY',
    'UTC-05:00',
    true,
    4.9,
    6,
    'Master of Computer Science, MIT',
    ARRAY['TensorFlow Developer Certificate', 'AWS Machine Learning Specialty']
),
(
    'Emily Johnson',
    'DevOps Engineer',
    'DevOps specialist with 5+ years automating infrastructure and CI/CD pipelines. Expert in cloud platforms, containerization, and infrastructure as code. Reduced deployment time by 80% for multiple organizations.',
    ARRAY['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'GitLab CI', 'Python', 'Bash'],
    'Open',
    95,
    'Austin, TX',
    'UTC-06:00',
    true,
    4.7,
    5,
    'Bachelor of Information Technology, University of Texas',
    ARRAY['AWS Certified DevOps Engineer', 'Kubernetes Administrator']
),
(
    'David Kim',
    'Data Scientist',
    'Data scientist with expertise in statistical analysis, predictive modeling, and data visualization. Built recommendation systems and fraud detection models. Strong background in Python, R, and SQL.',
    ARRAY['Python', 'R', 'SQL', 'Pandas', 'Scikit-learn', 'Tableau', 'Power BI', 'Apache Spark'],
    'Open',
    90,
    'Seattle, WA',
    'UTC-08:00',
    false,
    4.6,
    4,
    'Master of Data Science, University of Washington',
    ARRAY['Google Data Analytics Certificate']
),
(
    'Lisa Wang',
    'Frontend Developer',
    'Creative frontend developer specializing in modern JavaScript frameworks and responsive design. Built user interfaces for millions of users. Expert in accessibility and performance optimization.',
    ARRAY['React', 'Vue.js', 'JavaScript', 'TypeScript', 'CSS3', 'SASS', 'Webpack', 'Jest'],
    'Booked',
    75,
    'Los Angeles, CA',
    'UTC-08:00',
    true,
    4.8,
    7,
    'Bachelor of Design, UCLA',
    ARRAY['Google UX Design Certificate']
);

-- Insert sample reviews
INSERT INTO talent_reviews (talent_id, client_name, rating, comment) VALUES
(
    (SELECT id FROM talents WHERE full_name = 'Sarah Chen' LIMIT 1),
    'TechCorp Inc.',
    5,
    'Sarah delivered an exceptional project on time and within budget. Her technical expertise and communication skills are outstanding.'
),
(
    (SELECT id FROM talents WHERE full_name = 'Sarah Chen' LIMIT 1),
    'StartupXYZ',
    4,
    'Great developer with strong problem-solving skills. Would definitely work with again.'
),
(
    (SELECT id FROM talents WHERE full_name = 'Michael Rodriguez' LIMIT 1),
    'AI Solutions Ltd.',
    5,
    'Michael is a true expert in AI/ML. His work on our recommendation system exceeded expectations.'
),
(
    (SELECT id FROM talents WHERE full_name = 'Emily Johnson' LIMIT 1),
    'CloudTech',
    5,
    'Emily transformed our DevOps processes. Deployment time reduced from hours to minutes.'
),
(
    (SELECT id FROM talents WHERE full_name = 'David Kim' LIMIT 1),
    'DataInsights',
    4,
    'David provided valuable insights from our data. His analysis helped us make better business decisions.'
),
(
    (SELECT id FROM talents WHERE full_name = 'Lisa Wang' LIMIT 1),
    'DesignStudio',
    5,
    'Lisa created beautiful, accessible user interfaces. Her attention to detail is remarkable.'
);

-- Create a view for talent statistics
CREATE OR REPLACE VIEW talent_stats AS
SELECT 
    t.id,
    t.full_name,
    t.title,
    t.rating,
    COUNT(r.id) as review_count,
    AVG(r.rating) as avg_rating
FROM talents t
LEFT JOIN talent_reviews r ON t.id = r.talent_id
GROUP BY t.id, t.full_name, t.title, t.rating;

-- Grant necessary permissions (adjust based on your Supabase setup)
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO authenticated;
-- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO authenticated; 