import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('autonomous_agents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      res.status(200).json(data || []);
    } catch (error) {
      console.error('Error fetching agents:', error);
      res.status(500).json({ error: 'Failed to fetch agents' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, type, capabilities, services, config } = req.body;

      const agentData = {
        name,
        type,
        status: 'idle',
        workload: 0,
        current_task: 'Initializing...',
        next_steps: [],
        services,
        capabilities,
        dependencies: [],
        performance: {
          tasksCompleted: 0,
          successRate: 100,
          avgResponseTime: 0
        },
        created_at: new Date().toISOString(),
        last_active: new Date().toISOString(),
        config: config || {}
      };

      const { data, error } = await supabase
        .from('autonomous_agents')
        .insert([agentData])
        .select()
        .single();

      if (error) throw error;

      res.status(201).json(data);
    } catch (error) {
      console.error('Error creating agent:', error);
      res.status(500).json({ error: 'Failed to create agent' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id, ...updates } = req.body;

      const { data, error } = await supabase
        .from('autonomous_agents')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      res.status(200).json(data);
    } catch (error) {
      console.error('Error updating agent:', error);
      res.status(500).json({ error: 'Failed to update agent' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      const { error } = await supabase
        .from('autonomous_agents')
        .delete()
        .eq('id', id);

      if (error) throw error;

      res.status(200).json({ message: 'Agent deleted successfully' });
    } catch (error) {
      console.error('Error deleting agent:', error);
      res.status(500).json({ error: 'Failed to delete agent' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 