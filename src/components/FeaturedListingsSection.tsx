import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Star, MapPin, Clock } from 'lucide-react';

export function FeaturedListingsSection() {
  return (
    <section className="py-16 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Listings
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Discover top-rated tech professionals and services featured by our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-zion-blue border-zion-blue-lighter">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Senior Full-Stack Developer</CardTitle>
                <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Remote</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Full-time</span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-zion-slate-light ml-2">5.0</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                View Profile
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-zion-blue border-zion-blue-lighter">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">UI/UX Design Agency</CardTitle>
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">New York, NY</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Project-based</span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-zion-slate-light ml-2">4.9</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                View Agency
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-zion-blue border-zion-blue-lighter">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">DevOps Engineer</CardTitle>
                <Badge variant="secondary" className="bg-zion-cyan-light/20 text-zion-cyan-light">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Contract</span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-zion-slate-light ml-2">4.8</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                View Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}