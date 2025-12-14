# Portfolio Website

This is a personal portfolio website built with React, Vite, and Tailwind CSS.

## Deployment

This project is configured for deployment to GitHub Pages.

### How to Manually Update Testimonials

If you are using manual updates for client testimonials, follow these steps to add new testimonials to your website:

1.  **Open the file:** Navigate to `src/components/portfolio/TestimonialsSection.tsx`.
2.  **Locate the `testimonials` array:** Inside this file, find the JavaScript array named `testimonials`. It will look similar to this:
    ```typescript
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        image: "https://images.unsplash.com/...", // Property can remain or be removed for new entries
        content: "Siyabonga delivered an exceptional website...",
        rating: 5
      },
      // ... other testimonials
    ];
    ```
3.  **Add a new testimonial object:** For each new client submission, create a new object following the existing structure and add it to the `testimonials` array.
    *   **`id`**: Ensure this number is unique for each testimonial (e.g., if the last one was `3`, make the new one `4`).
    *   **`name`**: The name of the client.
    *   **`role`**: Their role or company.
    *   **`image`**: This property is optional as images are no longer displayed; you can remove it or set an empty string if desired.
    *   **`content`**: The actual testimonial text.
    *   **`rating`**: The star rating (1-5).

    **Example of adding a new testimonial:**
    ```typescript
    const testimonials = [
      // ... existing testimonials ...
      {
        id: 4, // Make sure this is a unique ID
        name: "New Client Name",
        role: "Manager, New Company",
        image: "https://example.com/new-client-image.jpg", // Optional, can be an empty string or removed
        content: "This is a fantastic new testimonial!",
        rating: 4
      }
    ];
    ```
4.  **Save the file:** Save your changes to `src/components/portfolio/TestimonialsSection.tsx`.
5.  **Re-deploy your application:** After updating the testimonials, you must rebuild and re-deploy your application for the changes to appear on your live website. Run the following command in your terminal:
    ```bash
    npm run deploy
    ```
