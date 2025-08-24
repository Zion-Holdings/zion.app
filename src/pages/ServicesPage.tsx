import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Brain, Shield } from "lucide-react";

        {/* Navigation to Specialized Service Pages */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link to="/enhanced-services">
            <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
              <Globe className="h-4 w-4 mr-2" />
              Enhanced Services Showcase
            </Button>
          </Link>
          <Link to="/ai-services">
            <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
              <Brain className="h-4 w-4 mr-2" />
              AI Services
            </Button>
          </Link>
          <Link to="/cybersecurity-services">
            <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
              <Shield className="h-4 w-4 mr-2" />
              Cybersecurity
            </Button>
          </Link>
          <Link to="/it-onsite-services">
            <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
              <Globe className="h-4 w-4 mr-2" />
              Global IT Onsite Services
            </Button>
          </Link>
          <Link to="/request-quote">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Request a Quote
            </Button>
          </Link>
        </div>