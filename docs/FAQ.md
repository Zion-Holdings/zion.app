# Frequently Asked Questions

This page answers common questions about using the Zion AI Marketplace.

## How do I publish my AI product or service?

Create an account and click **Post Your Product/Service for Free**. Fill in the details, upload images, set pricing, and submit for review. Listings that pass our quality check go live within 24 hours.

## What types of AI jobs can I find or post?

You can find or advertise roles for machine learning engineers, data scientists, AI researchers, computer vision experts, NLP specialists, and other technical positions. Job seekers can highlight AI skills in their profile for better matches.

## What IT equipment is available for purchase or rental?

Zion offers servers, storage solutions, networking gear, power supplies, and complete rack setups. Equipment can be purchased or rented with flexible terms and options for new, refurbished, or certified used hardware.

## How does Zion ensure 24x7x365 global availability?

Our infrastructure uses distributed data centers with redundant systems and automatic failover. A worldwide team of specialists works in rotating shifts to provide continuous service and support.

## What is Zion's Green IT and recycling program?

We follow sustainable practices throughout the equipment lifecycle. Obsolete hardware is recycled or reused in line with WEEE, RoHS, and e-Stewards standards, and we provide certificates of proper disposal when required.

## Are there any fees for listing my products or services?

No. Posting products, services, job listings, or CVs is free. Optional premium placement is available for additional visibility.

## How do I track my order status?

Visit the **Orders** page in your account dashboard. You can also ask the chatbot for an update by providing your order ID.

## How do I contact support if I run into issues?

Reach us anytime via the chat widget, email **support@ziontechgroup.com**, or call +1&nbsp;302&nbsp;464&nbsp;0950. The Help Center inside the app also contains tutorials and contact options.

## Development & Technical Questions

### What is the self-healing lint system?

The self-healing lint system automatically detects and fixes lint errors and warnings after each build. It runs multiple fix strategies and commits changes automatically, ensuring code quality without manual intervention.

### How do I use the self-healing lint system?

- **Manual healing**: `npm run lint:heal`
- **Build with healing**: `npm run build:with-healing`
- **Continuous monitoring**: `npm run heal:continuous`
- **Start system**: `npm run self-healing:start`

### What if the self-healing system gets stuck?

Run `pkill -f "self-healing"` to stop all processes, then restart with `npm run self-healing:start`. If issues persist, check the logs at `logs/self-healing-lint.log`.

### How do I check the status of the self-healing system?

View real-time logs with `tail -f logs/self-healing-lint.log` or check the system health with `npm run self-healing:status`.

### Can I disable the self-healing system?

Yes, you can stop the continuous monitoring with `pkill -f "self-healing"` or avoid using the healing commands. The system only runs when explicitly triggered or through automated workflows.
