# Deployment Guide for Apex Co.

## Overview
Your project is configured for free GitHub Pages hosting. This guide walks you through the deployment process.

## Prerequisites
- GitHub account (free)
- GoDaddy account (for domain management)
- Git installed locally

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the **+** icon in the top right corner → **New repository**
3. Name it: `apexco` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Click **Create repository**

## Step 2: Push Code to GitHub

In your project directory, run:

```bash
git init
git add .
git commit -m "Initial commit: Apex Co. website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/apexco.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - This will automatically deploy your site when you push changes

4. The deployment will start automatically. Wait 1-2 minutes for it to complete.
5. Once done, you'll see a green checkmark and a URL like: `https://YOUR-USERNAME.github.io/apexco/`

## Step 4: Connect Your GoDaddy Domain

### Option A: Point Domain to GitHub (Recommended)

1. **Get your GitHub Pages IP address**:
   - In repository Settings → Pages, note your site URL
   - For custom domain support, you'll use CNAME record

2. **In GoDaddy Dashboard**:
   - Go to **DNS Management** for your domain `myapexco.ca`
   - Create a **CNAME** record:
     - **Name**: `@` (or leave blank for root domain)
     - **Type**: CNAME
     - **Value**: `YOUR-USERNAME.github.io`
     - **TTL**: 3600 (default)
   - Click **Save**

3. **Configure GitHub**:
   - In your repository Settings → Pages
   - Under "Custom domain", enter: `myapexco.ca`
   - Check "Enforce HTTPS" (recommended)
   - Save

4. **Wait 24 hours** for DNS propagation. Your site will be live at `https://myapexco.ca`

### Option B: Alternative - Use A Records (if CNAME doesn't work)

In GoDaddy DNS Management, create these **A** records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Point to host: `myapexco.ca`

## Step 5: Add CNAME File (for custom domain)

A `CNAME` file has been added to your `public/` directory. GitHub will use this to recognize your custom domain.

## Verify Deployment

- Navigate to `https://myapexco.ca` after DNS propagates (may take up to 24 hours)
- Check that the SerapoX image loads correctly

## Automatic Deployments

Your GitHub Actions workflow is configured to:
- Automatically build on every push to `main` branch
- Deploy to GitHub Pages automatically
- No manual deployment needed!

## Troubleshooting

**DNS Not Resolving?**
- DNS changes take 24-48 hours to propagate
- Check GoDaddy DNS settings are correct
- Try clearing browser cache or using incognito mode

**GitHub Pages not updating?**
- Check the Actions tab in your GitHub repository
- Look for any failed workflows
- Ensure you're pushing to the `main` branch

**Images not loading?**
- Check browser console for 404 errors
- Ensure all image paths in code are correct
- The `sub-serapox.png` image has been renamed and configured

## Quick Commands Reference

```bash
# Build locally
npm run build

# Test locally before pushing
npm run dev

# Push changes to deploy
git add .
git commit -m "Your message"
git push
```

## Support
For GitHub Pages issues: https://docs.github.com/en/pages
For GoDaddy domain help: GoDaddy Support Center
