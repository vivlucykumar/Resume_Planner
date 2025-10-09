# Angular Personal Resume Website

This is a professional, single-page resume website built with Angular and Bootstrap. It is designed to be easily customizable and deployable to GitHub Pages.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js and npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`

## How to Run Locally

1.  **Clone or download the repository:**
    ```bash
    git clone <your-repo-url>
    cd angular-resume
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    ng serve -o
    ```
    The application will automatically open in your browser at `http://localhost:4200/`.

## How to Customize

All personal data is located in `src/app/services/resume-data.service.ts`. You can easily update your work experience, education, skills, and personal details by modifying the objects in this file.

## How to Deploy to GitHub Pages

This project uses the `angular-cli-ghpages` package to make deployment simple.

1.  **Install the deployment package:**
    ```bash
    ng add angular-cli-ghpages
    ```

2.  **Build and deploy the application:**
    Replace `<your-github-username>` and `<your-repo-name>` with your actual GitHub details.
    ```bash
    ng deploy --base-href=https://<your-github-username>.github.io/<your-repo-name>/
    ```

3.  **That's it!** Your resume website will be live at the URL you specified.


ng generate component components/<header.component>
ng generate component components/summary<header.component>

ng deploy --base-href=https://vivlucykumar.github.io/Resume_Planner/