# Histology Gallery

A web gallery for displaying histology microscope photos.

## Accessing via GitHub Pages

This project is configured to be deployed to GitHub Pages automatically. To access the website via GitHub Pages, follow these steps:

1. Push your code to the main branch of your GitHub repository
2. GitHub Actions will automatically build and deploy your site
3. Once deployed, your site will be available at: https://[your-github-username].github.io/histology-gallery/

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Configuration

This project uses GitHub Actions for automatic deployment to GitHub Pages. The workflow is defined in `.github/workflows/deploy.yml`.

To enable GitHub Pages for your repository:

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The deployment will happen automatically when you push to the main branch

## Project Structure

- `/public/images/` - Contains all the histology images
- `/src/` - React application source code
