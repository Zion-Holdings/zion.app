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

-- Autonomous Agents System Database Schema

-- Create autonomous_agents table
CREATE TABLE IF NOT EXISTS autonomous_agents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'idle',
    workload INTEGER DEFAULT 0,
    current_task TEXT DEFAULT 'Initializing...',
    next_steps JSONB DEFAULT '[]',
    services JSONB DEFAULT '[]',
    capabilities JSONB DEFAULT '[]',
    dependencies JSONB DEFAULT '[]',
    performance JSONB DEFAULT '{"tasksCompleted": 0, "successRate": 100, "avgResponseTime": 0}',
    config JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create system_metrics table
CREATE TABLE IF NOT EXISTS system_metrics (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'current',
    total_agents INTEGER DEFAULT 0,
    active_agents INTEGER DEFAULT 0,
    total_tasks INTEGER DEFAULT 0,
    completed_tasks INTEGER DEFAULT 0,
    system_health VARCHAR(50) DEFAULT 'good',
    avg_response_time INTEGER DEFAULT 0,
    error_rate DECIMAL(5,2) DEFAULT 0.0,
    efficiency DECIMAL(5,2) DEFAULT 0.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create agent_logs table
CREATE TABLE IF NOT EXISTS agent_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID REFERENCES autonomous_agents(id) ON DELETE CASCADE,
    level VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orchestrator_tasks table
CREATE TABLE IF NOT EXISTS orchestrator_tasks (
    id VARCHAR(100) PRIMARY KEY,
    type VARCHAR(100) NOT NULL,
    priority VARCHAR(20) DEFAULT 'normal',
    requirements JSONB DEFAULT '{}',
    status VARCHAR(50) DEFAULT 'pending',
    assigned_agent UUID REFERENCES autonomous_agents(id) ON DELETE SET NULL,
    result JSONB DEFAULT NULL,
    error TEXT DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orchestrator_reports table
CREATE TABLE IF NOT EXISTS orchestrator_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    system_metrics JSONB NOT NULL,
    agent_summary JSONB NOT NULL,
    task_summary JSONB NOT NULL,
    performance_analysis JSONB NOT NULL,
    recommendations JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cron_schedules table
CREATE TABLE IF NOT EXISTS cron_schedules (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cron_expression VARCHAR(100) NOT NULL,
    command TEXT NOT NULL,
    enabled BOOLEAN DEFAULT true,
    priority VARCHAR(20) DEFAULT 'normal',
    last_run TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    next_run TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    run_count INTEGER DEFAULT 0,
    success_count INTEGER DEFAULT 0,
    failure_count INTEGER DEFAULT 0,
    avg_duration INTEGER DEFAULT 0,
    last_error TEXT DEFAULT NULL,
    config JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cron_job_logs table
CREATE TABLE IF NOT EXISTS cron_job_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    schedule_id VARCHAR(100) REFERENCES cron_schedules(id) ON DELETE CASCADE,
    level VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    duration INTEGER DEFAULT 0,
    success BOOLEAN DEFAULT true,
    error TEXT DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create system_backups table
CREATE TABLE IF NOT EXISTS system_backups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    backup_type VARCHAR(50) NOT NULL,
    file_path TEXT,
    file_size BIGINT DEFAULT 0,
    status VARCHAR(50) DEFAULT 'pending',
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

-- Create performance_metrics table
CREATE TABLE IF NOT EXISTS performance_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID REFERENCES autonomous_agents(id) ON DELETE CASCADE,
    metric_type VARCHAR(50) NOT NULL,
    metric_value DECIMAL(10,2) NOT NULL,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create workload_distribution table
CREATE TABLE IF NOT EXISTS workload_distribution (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    low_workload_count INTEGER DEFAULT 0,
    medium_workload_count INTEGER DEFAULT 0,
    high_workload_count INTEGER DEFAULT 0,
    total_agents INTEGER DEFAULT 0,
    avg_workload DECIMAL(5,2) DEFAULT 0.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create error_logs table
CREATE TABLE IF NOT EXISTS error_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source VARCHAR(100) NOT NULL,
    error_type VARCHAR(100) NOT NULL,
    error_message TEXT NOT NULL,
    stack_trace TEXT,
    metadata JSONB DEFAULT '{}',
    resolved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    resolved_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_autonomous_agents_status ON autonomous_agents(status);
CREATE INDEX IF NOT EXISTS idx_autonomous_agents_type ON autonomous_agents(type);
CREATE INDEX IF NOT EXISTS idx_autonomous_agents_created_at ON autonomous_agents(created_at);
CREATE INDEX IF NOT EXISTS idx_agent_logs_agent_id ON agent_logs(agent_id);
CREATE INDEX IF NOT EXISTS idx_agent_logs_created_at ON agent_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_orchestrator_tasks_status ON orchestrator_tasks(status);
CREATE INDEX IF NOT EXISTS idx_orchestrator_tasks_assigned_agent ON orchestrator_tasks(assigned_agent);
CREATE INDEX IF NOT EXISTS idx_cron_schedules_enabled ON cron_schedules(enabled);
CREATE INDEX IF NOT EXISTS idx_cron_schedules_next_run ON cron_schedules(next_run);
CREATE INDEX IF NOT EXISTS idx_performance_metrics_agent_id ON performance_metrics(agent_id);
CREATE INDEX IF NOT EXISTS idx_performance_metrics_created_at ON performance_metrics(created_at);
CREATE INDEX IF NOT EXISTS idx_error_logs_source ON error_logs(source);
CREATE INDEX IF NOT EXISTS idx_error_logs_resolved ON error_logs(resolved);

-- Create functions for automatic timestamp updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_autonomous_agents_updated_at 
    BEFORE UPDATE ON autonomous_agents 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_system_metrics_updated_at 
    BEFORE UPDATE ON system_metrics 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orchestrator_tasks_updated_at 
    BEFORE UPDATE ON orchestrator_tasks 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cron_schedules_updated_at 
    BEFORE UPDATE ON cron_schedules 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create function to calculate agent performance
CREATE OR REPLACE FUNCTION calculate_agent_performance(agent_uuid UUID)
RETURNS JSONB AS $$
DECLARE
    result JSONB;
BEGIN
    SELECT jsonb_build_object(
        'tasksCompleted', COALESCE(SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END), 0),
        'successRate', CASE 
            WHEN COUNT(*) > 0 THEN 
                ROUND((COUNT(CASE WHEN status = 'completed' THEN 1 END)::DECIMAL / COUNT(*)) * 100, 2)
            ELSE 100 
        END,
        'avgResponseTime', COALESCE(AVG(
            EXTRACT(EPOCH FROM (completed_at - started_at)) * 1000
        ), 0)
    ) INTO result
    FROM orchestrator_tasks 
    WHERE assigned_agent = agent_uuid;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Create function to get system health status
CREATE OR REPLACE FUNCTION get_system_health()
RETURNS VARCHAR(50) AS $$
DECLARE
    error_rate DECIMAL;
    health_status VARCHAR(50);
BEGIN
    SELECT 
        CASE 
            WHEN COUNT(*) > 0 THEN 
                (COUNT(CASE WHEN status = 'error' THEN 1 END)::DECIMAL / COUNT(*)) * 100
            ELSE 0 
        END INTO error_rate
    FROM autonomous_agents;
    
    health_status := CASE 
        WHEN error_rate > 20 THEN 'critical'
        WHEN error_rate > 10 THEN 'warning'
        ELSE 'good'
    END;
    
    RETURN health_status;
END;
$$ LANGUAGE plpgsql;

-- Insert initial system metrics
INSERT INTO system_metrics (id, total_agents, active_agents, system_health)
VALUES ('current', 0, 0, 'good')
ON CONFLICT (id) DO NOTHING;

-- Create views for easier querying
CREATE OR REPLACE VIEW agent_summary AS
SELECT 
    id,
    name,
    type,
    status,
    workload,
    current_task,
    performance->>'tasksCompleted' as tasks_completed,
    performance->>'successRate' as success_rate,
    performance->>'avgResponseTime' as avg_response_time,
    created_at,
    last_active
FROM autonomous_agents;

CREATE OR REPLACE VIEW system_overview AS
SELECT 
    COUNT(*) as total_agents,
    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_agents,
    COUNT(CASE WHEN status = 'idle' THEN 1 END) as idle_agents,
    COUNT(CASE WHEN status = 'error' THEN 1 END) as error_agents,
    AVG(workload) as avg_workload,
    get_system_health() as system_health
FROM autonomous_agents;

CREATE OR REPLACE VIEW task_summary AS
SELECT 
    COUNT(*) as total_tasks,
    COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_tasks,
    COUNT(CASE WHEN status = 'assigned' THEN 1 END) as assigned_tasks,
    COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_tasks,
    AVG(EXTRACT(EPOCH FROM (completed_at - started_at)) * 1000 as avg_completion_time
FROM orchestrator_tasks;

-- Grant necessary permissions (adjust as needed for your setup)
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO your_user;
-- GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO your_user; 