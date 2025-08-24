#!/usr/bin/env python3
"""
Seed script for adding sample updates to the database.
Run this after initializing the database to populate it with sample update data.
"""

import os
import sys
from datetime import datetime, timedelta

# Add the current directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app import app
from models import db, Update, User, Category, Course

def seed_updates():
    """Seed the database with sample updates."""
    with app.app_context():
        # Check if updates already exist
        if Update.query.first():
            print("Updates already exist in the database. Skipping seed.")
            return
        
        # Create sample updates
        sample_updates = [
            {
                'title': 'New Course: Advanced Blockchain Development',
                'content': '''We're excited to announce our newest course: Advanced Blockchain Development!

This comprehensive course covers:
• Smart contract development with Solidity
• DeFi protocol design and implementation
• Layer 2 scaling solutions
• Cross-chain interoperability
• Security best practices and auditing

The course includes hands-on projects, real-world case studies, and mentorship from industry experts. Perfect for developers looking to advance their blockchain skills and contribute to the future of decentralized finance.

Enrollment opens next week with early bird pricing available for the first 50 students.''',
                'summary': 'Comprehensive blockchain development course covering smart contracts, DeFi protocols, and security best practices.',
                'update_type': 'course',
                'priority': 'high',
                'created_at': datetime.utcnow() - timedelta(hours=2)
            },
            {
                'title': 'System Maintenance Scheduled',
                'content': '''Scheduled maintenance will occur this weekend to improve platform performance and add new features.

Maintenance Window:
• Start: Saturday, 2:00 AM UTC
• End: Saturday, 6:00 AM UTC
• Duration: 4 hours

What's being improved:
• Database optimization for faster course loading
• Enhanced video streaming capabilities
• Improved mobile responsiveness
• New progress tracking features

During maintenance, the platform will be temporarily unavailable. We apologize for any inconvenience and appreciate your patience as we work to improve your learning experience.

All user progress and data will be preserved.''',
                'summary': '4-hour maintenance window this weekend to improve platform performance and add new features.',
                'update_type': 'system',
                'priority': 'normal',
                'created_at': datetime.utcnow() - timedelta(days=1)
            },
            {
                'title': 'Community Challenge: Build a DApp',
                'content': '''Join our community challenge and build a decentralized application (DApp)!

Challenge Details:
• Build a functional DApp using any blockchain platform
• Submit your project by the end of the month
• Winners receive exclusive prizes and recognition

Prizes include:
🥇 1st Place: $1000 in ZION tokens + Featured on our platform
🥈 2nd Place: $500 in ZION tokens + Course vouchers
🥉 3rd Place: $250 in ZION tokens + Premium membership

Judging criteria:
• Innovation and creativity (30%)
• Technical implementation (40%)
• User experience and design (20%)
• Documentation and presentation (10%)

Submit your projects at: academy.zion.community/challenge

Good luck to all participants! We can't wait to see what you build.''',
                'summary': 'Community challenge to build DApps with prizes up to $1000 in ZION tokens.',
                'update_type': 'announcement',
                'priority': 'high',
                'created_at': datetime.utcnow() - timedelta(days=2)
            },
            {
                'title': 'New Learning Path: Web3 Fundamentals',
                'content': '''We've launched a new learning path specifically designed for Web3 beginners!

The Web3 Fundamentals path includes:
1. Introduction to Blockchain Technology
2. Cryptocurrency Basics
3. Smart Contracts 101
4. DeFi Fundamentals
5. NFT Basics and Use Cases
6. Web3 Security Essentials

Each module includes:
• Interactive lessons with real examples
• Hands-on exercises and projects
• Community discussion forums
• Progress tracking and certificates

This path is perfect for:
• Developers new to blockchain
• Business professionals exploring Web3
• Students interested in emerging tech
• Anyone curious about the future of the internet

Start your Web3 journey today and earn your first certificate!''',
                'summary': 'New beginner-friendly learning path covering blockchain basics, DeFi, NFTs, and Web3 security.',
                'update_type': 'course',
                'priority': 'normal',
                'created_at': datetime.utcnow() - timedelta(days=3)
            },
            {
                'title': 'Emergency: Security Update Required',
                'content': '''URGENT: All users must update their passwords immediately.

We've detected a potential security vulnerability and are implementing mandatory password updates for all accounts.

Required Actions:
1. Change your password immediately
2. Enable two-factor authentication (2FA) if not already enabled
3. Review your account activity for any suspicious login attempts

Password Requirements:
• Minimum 12 characters
• Include uppercase and lowercase letters
• Include numbers and special characters
• Avoid common patterns or personal information

If you notice any suspicious activity on your account, please contact our security team immediately at security@zion.academy.

We apologize for the inconvenience and appreciate your prompt action to secure your account.''',
                'summary': 'Mandatory password update required due to security vulnerability. Enable 2FA recommended.',
                'update_type': 'security',
                'priority': 'urgent',
                'created_at': datetime.utcnow() - timedelta(days=4)
            }
        ]
        
        # Create and add updates
        for update_data in sample_updates:
            update = Update(**update_data)
            db.session.add(update)
        
        # Commit all updates
        db.session.commit()
        print(f"Successfully seeded {len(sample_updates)} sample updates!")
        
        # Print summary
        print("\nSample updates created:")
        for update in Update.query.all():
            print(f"• {update.title} ({update.priority} priority, {update.update_type})")

if __name__ == '__main__':
    print("Seeding database with sample updates...")
    seed_updates()
    print("Update seeding completed!")