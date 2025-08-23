# Deployment Checklist

## Pre-Deployment Verification

### 1. Environment Variables ✅
- [ ] All required environment variables are set in production platform
- [ ] No placeholder values (YOUR_, dummy, fallback, etc.)
- [ ] Sentry DSN and auth token configured
- [ ] Supabase URL and keys configured
- [ ] REOWN project ID configured
- [ ] API URLs point to production endpoints

### 2. Build Verification ✅
- [ ] `npm run build` passes without errors
- [ ] TypeScript compilation successful
- [ ] No duplicate file warnings
- [ ] All static pages generate successfully
- [ ] Bundle size within acceptable limits

### 3. Error Handling ✅
- [ ] Error boundaries are properly configured
- [ ] Sentry integration working
- [ ] Custom error reporting configured
- [ ] Fallback UI displays correctly
- [ ] Retry mechanisms functioning

### 4. Critical Features ✅
- [ ] Authentication flow works
- [ ] Payment processing functional
- [ ] Database connectivity verified
- [ ] API endpoints responding
- [ ] External integrations working

## Staging Verification

### 1. Route Testing
Visit each critical route and verify:
- [ ] `/` - Homepage loads without errors
- [ ] `/auth/login` - Authentication works
- [ ] `/marketplace` - Product listings display
- [ ] `/dashboard` - User dashboard accessible
- [ ] `/api/health` - Health check passes

### 2. Error Scenarios
Test error handling:
- [ ] Network errors display proper fallback
- [ ] Invalid routes show 404 page
- [ ] Server errors trigger error boundary
- [ ] Retry functionality works
- [ ] Error reporting to Sentry

### 3. Performance
Check critical metrics:
- [ ] Page load times < 3 seconds
- [ ] Time to First Byte < 800ms
- [ ] Largest Contentful Paint < 2.5s
- [ ] First Input Delay < 100ms
- [ ] Cumulative Layout Shift < 0.1

## Post-Deployment Monitoring

### 1. Immediate Checks (0-15 minutes)
- [ ] Homepage accessible
- [ ] Critical user flows working
- [ ] No error spikes in monitoring
- [ ] Database connections stable
- [ ] CDN serving assets properly

### 2. Short-term Monitoring (15 minutes - 2 hours)
- [ ] Error rates within normal range
- [ ] Response times acceptable
- [ ] User registrations working
- [ ] Payment processing functional
- [ ] Background jobs running

### 3. Extended Monitoring (2-24 hours)
- [ ] Memory usage stable
- [ ] No memory leaks detected
- [ ] Database performance normal
- [ ] Third-party integrations stable
- [ ] User feedback positive

## Rollback Plan

### Triggers for Rollback
- [ ] Error rate > 5% for 5 minutes
- [ ] Homepage unavailable for > 2 minutes
- [ ] Critical user flows broken
- [ ] Database corruption detected
- [ ] Security vulnerability exposed

### Rollback Steps
1. [ ] Notify team of rollback decision
2. [ ] Revert to previous deployment
3. [ ] Verify rollback successful
4. [ ] Update monitoring dashboards
5. [ ] Communicate status to stakeholders

## Environment-Specific Checklist

### Production
- [ ] SSL certificate valid
- [ ] CDN configuration correct
- [ ] Database backups recent
- [ ] Monitoring alerts active
- [ ] Log aggregation working

### Staging
- [ ] Mirrors production configuration
- [ ] Test data populated
- [ ] Feature flags configured
- [ ] Performance testing complete
- [ ] Security scanning passed

## Communication Plan

### Before Deployment
- [ ] Notify stakeholders of deployment window
- [ ] Announce potential downtime
- [ ] Prepare rollback communication

### During Deployment
- [ ] Monitor error rates and performance
- [ ] Update team on progress
- [ ] Document any issues encountered

### After Deployment
- [ ] Confirm successful deployment
- [ ] Share performance metrics
- [ ] Document lessons learned

## Emergency Contacts

- **Primary Engineer**: [contact]
- **DevOps Lead**: [contact]
- **Product Manager**: [contact]
- **Support Team**: [contact]

## Tools and Dashboards

- **Monitoring**: Sentry dashboard
- **Performance**: Web Vitals
- **Infrastructure**: Platform dashboard
- **Logs**: Application logs
- **Health Check**: `/api/health` 