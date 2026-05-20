// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-manifesto",
    title: "Manifesto",
    section: "Navigation",
    handler: () => {
      window.location.href = "/civic-Autonomy/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/civic-Autonomy/blog/";
          },
        },{id: "nav-insights",
          title: "Insights",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/civic-Autonomy/news/";
          },
        },{id: "post-the-welfare-trap",
        
          title: "The Welfare Trap",
        
        description: "Moving from punitive centralized control to localized civic productivity.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/civic-Autonomy/blog/2026/welfare/";
          
        },
      },{id: "post-hospital-waiting-times",
        
          title: "Hospital Waiting Times",
        
        description: "Why the NHS crisis is a classic scale failure and centralised bottleneck.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/civic-Autonomy/blog/2026/healthcare/";
          
        },
      },{id: "post-the-immigration-myth",
        
          title: "The Immigration Myth",
        
        description: "Looking past the small boats to diagnose the systemic collapse of localized economic resilience.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/civic-Autonomy/blog/2026/immigration/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/civic-Autonomy/books/the_godfather/";
            },},{id: "news-the-myth-of-the-great-fixer",
          title: 'The Myth of the Great Fixer',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/civic-Autonomy/news/2026-05-20-the-myth-of-the-great-fixer/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/civic-Autonomy/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/civic-Autonomy/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
