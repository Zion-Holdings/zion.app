import { Tutorial } from '@/types/tutorial';
export const TUTORIALS: Tutorial[] = [
  {
    "title": "Setting Up a Private GPT Model",
    "excerpt": "Step-by-step guide to fine-tune and deploy a private GPT instance.",
    "category": "AI Tutorial",
    "tags": [
      "GPT",
      "Privacy"
    ],
    "featuredImage": "/images/blog-placeholder.svg",
    "author": "Alex Rivera",
    "publishedDate": "Jul 8, 2024",
    "readTime": "10 min read",
    "id": "2024-07-08-setting-up-private-gpt",
    "slug": "2024-07-08-setting-up-private-gpt",
    "content": "This tutorial walks through preparing your data, running the fine-tuning script, and deploying a private GPT endpoint for internal use.\n\n## 1. Gather and Clean Training Data\nCollect text samples relevant to your organization. Remove any sensitive information and check for formatting issues. The quality of your dataset directly impacts model performance.\n\n## 2. Configure the Training Environment\nInstall the necessary libraries such as `transformers` and `datasets`. Ensure you have adequate GPU resources or use a cloud provider that supports large model training.\n\n## 3. Run the Fine-Tuning Script\nUse the provided script to fine-tune the base GPT model on your dataset. Adjust hyperparameters like learning rate and batch size to achieve the best results.\n\n## 4. Evaluate the Model\nAfter training completes, test the model on sample prompts. Review the output for accuracy and adjust your data or training settings if necessary.\n\n## 5. Deploy a Private Endpoint\nOnce satisfied with the model, containerize it with Docker and deploy to your preferred hosting solution. Restrict network access so only internal applications can reach the API.\n\n## 6. Maintain and Update\nPeriodically retrain the model with new data to keep responses accurate. Monitor performance and resource usage to ensure your private GPT continues to serve users effectively."
  },
  {
    "title": "Hiring a Freelance AI Engineer via Zion",
    "excerpt": "Step-by-step guide to finding and hiring AI talent on Zion.",
    "category": "AI Tutorial",
    "tags": [
      "AI",
      "Hiring"
    ],
    "featuredImage": "/images/blog-placeholder.svg",
    "author": "Zion Team",
    "publishedDate": "Sep 30, 2024",
    "readTime": "5 min read",
    "id": "2024-09-30-hiring-freelance-ai-engineer-via-zion",
    "slug": "2024-09-30-hiring-freelance-ai-engineer-via-zion",
    "content": "This tutorial explains how to use Zion to hire a freelance AI engineer.\n\n## 1. Create Your Project Brief\nDescribe the AI skills you need, project timeline, and budget in detail. A clear brief attracts qualified candidates.\n\n## 2. Post the Opportunity\nNavigate to the **Talents** section and click **Post Job**. Upload your brief and set your desired terms.\n\n## 3. Review Candidate Proposals\nZion will match you with vetted engineers. Compare profiles, portfolios, and ratings to shortlist the best fit.\n\n## 4. Schedule Introductory Calls\nUse Zion's messaging system to arrange video calls with your top candidates. Discuss experience, availability, and expectations.\n\n## 5. Finalize Contract Terms\nWhen you've chosen an engineer, agree on pricing and milestones through Zion's contract interface.\n\n## 6. Kick Off the Project\nProvide onboarding materials and set communication channels for regular progress updates.\n\n## 7. Manage Payments Securely\nUse Zion's escrow system to release payments as milestones are completed, ensuring satisfaction for both parties."
  },
  {
    "title": "Uploading a Product to the Marketplace",
    "excerpt": "Storyboard outline for a 3-minute screencast on adding products.",
    "category": "Marketplace Tutorial",
    "tags": [
      "Marketplace",
      "Screencast"
    ],
    "featuredImage": "/images/blog-placeholder.svg",
    "author": "Zion Team",
    "publishedDate": "Sep 30, 2024",
    "readTime": "3 min read",
    "id": "2024-09-30-product-upload-screencast-storyboard",
    "slug": "2024-09-30-product-upload-screencast-storyboard",
    "content": "This guide provides a storyboard for a 3-minute screencast showing how to upload a product to the Zion marketplace.\n\n## Scene 1: Introduction (0:00–0:20)\nBriefly introduce Zion Marketplace and what viewers will learn.\n\n## Scene 2: Access the Seller Dashboard (0:20–0:40)\nLogin and navigate to **My Products** from your dashboard.\n\n## Scene 3: Start a New Listing (0:40–1:00)\nClick **Add Product** and select the appropriate category.\n\n## Scene 4: Enter Product Details (1:00–1:40)\nShow filling out the name, description, price, and uploading images.\n\n## Scene 5: Configure Shipping & Inventory (1:40–2:10)\nDemonstrate setting stock levels and shipping options.\n\n## Scene 6: Preview and Publish (2:10–2:40)\nPreview the listing, make adjustments, then click **Publish**.\n\n## Scene 7: Closing (2:40–3:00)\nSummarize the process and point viewers to support resources."
  }
];
