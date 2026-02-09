export const COLORS = {
  SHARK: '#1a1d20',
  OUTER_SPACE: '#31383f',
  COSMIC: '#733864',
  BONE: '#dfd2b9',
  SLATE_GRAY: '#6d7a8c',
  BISTRE: '#362b1b',
  CADET_BLUE: '#a0adc5',
  RETRO_YELLOW: '#ffff00',
};

export const FEATURES = [
  {
    id: 'ai',
    slug: 'ai-assistant',
    title: 'AI Data Extractor',
    description: 'Built-in intelligence to analyze pages.',
    longDescription: 'The AI Data Extractor is a built-in tool that leverages a local Large Language Model (Ollama) to analyze web pages and extract structured data. Unlike traditional regex-based scrapers, it understands context, enabling natural language queries for data extraction.',
    capabilities: ['Data Table Extraction', 'Semantic Analysis', 'Local Ollama Integration', 'Natural Language Queries'],
    icon: 'bot',
    mockUrl: 'browser://ai-extractor',
    placeholderImage: 'https://placehold.co/1200x800/1a1d20/dfd2b9?text=AI+Data+Extractor+Interface',
    customImage: '/ai.png',
    sections: [
      {
        heading: 'Overview',
        content: 'The AI Data Extractor is a built-in tool that leverages a local Large Language Model (Ollama) to analyze web pages and extract structured data. Unlike traditional regex-based scrapers, it understands context, enabling natural language queries for data extraction.'
      },
      {
        heading: 'Capabilities',
        subsections: [
          {
            title: '1. Data Table Extraction',
            content: 'Function: Converts unstructured text or complex HTML layouts into clean, exportable spreadsheets.\nUsage: Select "Data Table" mode and enter a prompt.\nExample Prompts:\n- "List all products with their name, current price, and star rating."\n- "Extract all upcoming events, dates, and locations from this page."\n- "Find every employee name and their job title."\nMechanism: The browser extracts the page text, sends it to the local AI with your prompt, and parses the JSON response into a grid.'
          },
          {
            title: '2. Semantic Analysis',
            content: 'Function: Summarizes content, explains complex topics, or performs sentiment analysis.\nUsage: Select "Analysis" mode.\nExample Prompts:\n- "Summarize the main arguments of this article in 3 bullet points."\n- "What is the overall sentiment of these reviews?"\n- "Explain the code snippet on this page in simple terms."'
          }
        ]
      },
      {
        heading: 'Technical Requirements',
        content: 'Ollama: You must have Ollama installed and running on your machine.\nLocal Model: The browser defaults to using standard models available in Ollama (e.g., llama3, mistral). Ensure you have pulled a model via your terminal (e.g., ollama pull llama3).\nState Indication:\n- Connected: Ollama is detected and ready.\n- Ollama not running: You need to start the Ollama application.'
      },
      {
        heading: 'User Interface',
        content: 'Toggle: Click the Robot icon in the toolbar.\nPanel: A retro-styled slide-out panel on the right side of the window.\nControls:\n- Data/Analysis Switch: Toggles between table output and text output.\n- Prompt Input: Text area for your natural language instructions.\n- Export Buttons: Save results immediately to CSV, JSON, or TXT.'
      },
      {
        heading: 'Troubleshooting',
        content: '"Reading Page..." hangs: The page might be extremely large. The extractor truncates text to ~12,000 characters to fit context windows.\nInaccurate Data: The AI relies on the visible text. If data is hidden behind "Load More" buttons, use the Scraper\'s Auto-Scroll feature first to load it, then run the AI.\nJSON errors: Occasionally the model replies with text instead of JSON. Switch to "Analysis" mode to see the raw output.'
      }
    ]
  },
  {
    id: 'tor',
    slug: 'tor-mode',
    title: 'Tor Privacy Mode',
    description: 'One-click privacy. Vanish from the web.',
    longDescription: 'Tor Privacy Mode integrates the Tor anonymity network directly into the browser. It routes your internet traffic through a distributed network of relays, concealing your IP address and physical location from the websites you visit.',
    capabilities: ['Onion Routing', 'IP Masking', 'No Logs Policy', 'Circuit Visualization'],
    icon: 'mask',
    mockUrl: 'browser://tor-connection',
    placeholderImage: 'https://placehold.co/1200x800/1a1d20/dfd2b9?text=Tor+Mode+Circuit+View',
    customImage: '/tor.png',
    sections: [
      {
        heading: 'Overview',
        content: 'Tor Privacy Mode integrates the Tor anonymity network directly into the browser. It routes your internet traffic through a distributed network of relays, concealing your IP address and physical location from the websites you visit.'
      },
      {
        heading: 'How It Works',
        content: 'When enabled, the browser launches a bundled Tor binary in the background. It establishes a SOCKS5 proxy connection, and all web requests from the active session are tunneled through this proxy.'
      },
      {
        heading: 'Controls',
        subsections: [
          {
            title: 'The Privacy Shield',
            content: 'Location: Toolbar, next to the URL bar.\nIcons:\n- Mask Icon: The primary toggle.\n- Status Text: Displays "OFF", "Starting...", or "Connected".'
          },
          {
            title: 'Connection States',
            content: 'Disconnected (Gray): Normal browsing. Your IP is visible. Speed is normal.\nStarting (Yellow/Blinking): The Tor process is bootstrapping. This can take 10-30 seconds depending on network conditions.\nConnected (Green): Secure. Your traffic is encrypted and bouncing through three random nodes globally.'
          },
          {
            title: 'The Tor Panel',
            content: 'Clicking the Tor icon opens the Logs & Status Panel.\n\nNetwork Logs: A real-time terminal view showing the raw output from the Tor process.\n- Useful for debugging: See exactly where the connection stalls (e.g., "stuck at 50%: Loading relay descriptors").\n- Verification: Confirms that the binary is actually running and connected to the Tor network.'
          }
        ]
      },
      {
        heading: 'Limitations & Warnings',
        content: 'Speed: Tor is significantly slower than standard internet due to the multi-hop routing. Video streaming may be buffering-heavy.\nCAPTCHAs: Many websites will flag Tor exit nodes as suspicious and require you to solve CAPTCHAs (e.g., Cloudflare checks).\nRegion Locks: You cannot choose your exit node country easily; it is random. Some geo-blocked content may be inaccessible.'
      },
      {
        heading: 'FAQ',
        content: 'Q: Does this make me 100% untraceable?\nA: No tool provides 100% anonymity. However, it makes traffic analysis significantly harder and hides your origin IP from the destination server.\n\nQ: Can I access .onion sites?\nA: Yes, if the browser\'s DNS resolution is configured to forward onion requests through the SOCKS proxy (feature support varies by version).'
      }
    ]
  },
  {
    id: 'scraper',
    slug: 'data-scraper',
    title: 'DOM Scraper',
    description: 'Extract web data into CSVs instantly.',
    longDescription: 'The DOM Scraper is a manual, high-precision tool for extracting specific data patterns (emails, phones, tables) from web pages without relying on AI. It runs entirely within the browser\'s renderer process, making it fast and private.',
    capabilities: ['Email & Phone Extraction', 'Smart CSS Selector', 'Table Detection', 'Auto-Scroll Script'],
    icon: 'database',
    mockUrl: 'browser://scraper-tool',
    placeholderImage: 'https://placehold.co/1200x800/1a1d20/dfd2b9?text=DOM+Scraper+Interface',
    customImage: '/scraper.png',
    sections: [
      {
        heading: 'Overview',
        content: 'The DOM Scraper is a manual, high-precision tool for extracting specific data patterns (emails, phones, tables) from web pages without relying on AI. It runs entirely within the browser\'s renderer process, making it fast and private.'
      },
      {
        heading: 'Tools & Extractors',
        subsections: [
          {
            title: '1. Email Extractor',
            content: 'Scans for:\n- Standard email formats (user@example.com).\n- Obfuscated emails (user [at] example [dot] com).\n- mailto: links.\n\nFiltering: Automatically ignores image files and common assets that look like emails (e.g., image.png, style.css).\nContext: Provides a snippet of surrounding text to help identify the source (e.g., "Contact us at...").'
          },
          {
            title: '2. Phone Extractor',
            content: 'Scans for:\n- International patterns (+1-555-010-9999).\n- US/Local patterns ((555) 010-9999).\n\nValidation: filters out numbers that are too short or too long to be valid phone numbers.'
          },
          {
            title: '3. Table Extractor',
            content: 'Semantic Tables: Detects standard HTML <table> elements.\nVisual Grids: Uses an intelligent heuristic to detect "div soups" that look like tables—repeated structures in a grid layout (e.g., e-commerce product grids, list views).\nPreview: Shows the first 5 rows of any detected table.\nExport: Each table can be individually exported to CSV.'
          },
          {
            title: '4. Smart Select',
            content: 'How it works:\n1. Activate Smart Select.\n2. Hover over an item you want to scrape (e.g., a product title).\n3. Click it.\n4. The scraper calculates a CSS selector and finds all other elements that match that pattern.\n\nUse Case: Collecting a list of titles, links, or prices that aren\'t in a strict table structure.'
          },
          {
            title: '5. Auto-Scroll',
            content: 'Function: Automated script that scrolls to the bottom of the page incrementally.\nPurpose: Many modern sites use "Infinite Scroll". Data doesn\'t exist until you scroll down. Run this before any extraction to ensure all data is loaded into the DOM.\nSafety: Automatically stops after ~15,000 pixels or if the bottom is reached to prevent infinite loops.'
          }
        ]
      },
      {
        heading: 'Exporting Data',
        content: 'The scraper panel provides global export buttons at the bottom:\n\nJSON: Exports the full raw dataset, including metadata (type, context, value).\nCSV: Flattens the data into a simple list.'
      },
      {
        heading: 'Tips',
        content: 'Reloading: If a page is dynamic (SPA), and the scraper seems stuck, a quick page reload (Ctrl+R) often resets the DOM context for a clean fresh scrape.'
      }
    ]
  },
  {
    id: 'email',
    slug: 'email-templates',
    title: 'Email Template Overlay',
    description: 'Instant email templates for Gmail & Outlook.',
    longDescription: 'The Email Template Overlay is a hidden, powerful productivity tool for Gmail, Outlook, Office 365, and Yahoo Mail. It provides a "Cosmic Theme" floating action button (FAB) that lets you instantly copy-paste pre-written responses.',
    capabilities: ['Floating Action Button', 'Template Management', 'Quick Copy & Paste', 'Smart Insertion'],
    icon: 'mail',
    mockUrl: 'browser://email-tools',
    placeholderImage: 'https://placehold.co/1200x800/1a1d20/dfd2b9?text=Email+Template+Overlay+Interface',
    customImage: '/email.png',
    sections: [
      {
        heading: 'Overview',
        content: 'The Email Template Overlay is a hidden, powerful productivity tool for Gmail, Outlook, Office 365, and Yahoo Mail. It provides a "Cosmic Theme" floating action button (FAB) that lets you instantly copy-paste pre-written responses.'
      },
      {
        heading: 'How to Access',
        content: 'Navigate to a supported email provider (e.g., mail.google.com).\nLook for the Purple Floating Button (✉️) in the bottom-right corner.\nClick it to open the Template Hub.'
      },
      {
        heading: 'Features',
        subsections: [
          {
            title: '1. Template Management',
            content: 'Create: Draft reusable email responses with a Name and Content. HTML is supported.\nSave: Templates are saved locally to your browser.\nManage: Edit or delete templates anytime.'
          },
          {
            title: '2. Quick Copy & Paste (Primary)',
            content: 'One-Click Copy: Click the Copy Icon next to any template.\nAction: The template content is instantly copied to your clipboard.\nPaste: Press Ctrl+V (or Right Click -> Paste) in your email compose window to insert it.\n\nWhy this way? Modern email clients often block direct automated insertion. Copy-paste is the most reliable method to ensure your formatting stays perfect.'
          },
          {
            title: '3. Smart Actions',
            content: 'Auto-Detection: If you click a template name directly, the browser attempts to insert it automatically into the active editor.\nFallback: If automatic insertion is blocked by the email provider, it defaults to the clipboard method, so you can just paste it yourself.'
          }
        ]
      },
      {
        heading: 'Troubleshooting',
        content: 'Button not appearing: A page reload is sometimes required for the injection script to initialize properly on Gmail/Outlook.\nFormatting issues: If pasting looks wrong, try pasting as "Plain Text" (Ctrl+Shift+V) or ensure you copied the HTML version using the copy button.'
      }
    ]
  },
  {
    id: 'focus',
    slug: 'focus-mode',
    title: 'Focus Mode',
    description: 'Distraction-free YouTube & content filters.',
    longDescription: 'Focus Mode is a dedicated set of content filters designed to reclaim your attention. While it can be expanded for other sites, its primary optimization is for YouTube, transforming it from a distraction machine into a learning tool.',
    capabilities: ['Hide Recommendations', 'Block Shorts', 'Hide Comments', 'Audio Only Mode'],
    icon: 'target',
    mockUrl: 'browser://focus-settings',
    placeholderImage: 'https://placehold.co/1200x800/1a1d20/dfd2b9?text=Focus+Mode+Settings',
    customImage: '/focus.png',
    sections: [
      {
        heading: 'Overview',
        content: 'Focus Mode is a dedicated set of content filters designed to reclaim your attention. While it can be expanded for other sites, its primary optimization is for YouTube, transforming it from a distraction machine into a learning tool.'
      },
      {
        heading: 'Philosophy',
        content: 'Modern platforms are engineered to keep you clicking. Focus Mode strips away the "slot machine" elements—recommendations, shorts, comments—leaving only the content you intentionally searched for.'
      },
      {
        heading: 'YouTube Customization Options',
        subsections: [
          {
            title: '1. Hide Recommendations',
            content: 'Effect: Removes the "Up Next" sidebar and the homepage algorithmic feed.\nBenefit: Prevents the "rabbit hole" effect where you watch one video and lose 2 hours.'
          },
          {
            title: '2. Hide Shorts',
            content: 'Effect: Removes the "Shorts" tab and the Shorts shelf from the UI.\nBenefit: Blocks short-form dopamine loops.'
          },
          {
            title: '3. Hide Comments',
            content: 'Effect: Completely hides the comments section below videos.\nBenefit: Preserves mental peace; prevents reading negative or distracting discourse.'
          },
          {
            title: '4. Hide All Images',
            content: 'Effect: Hides all thumbnails, avatars, and banner images. Text remains visible.\nBenefit: Extreme bandwidth saving and removes "clickbait" visual triggers.'
          },
          {
            title: '5. Audio Only Mode',
            content: 'Effect: A black overlay covers the video player, but audio continues playing.\nBenefit: Perfect for listening to video essays, podcasts, or music while working, saving CPU/GPU resources and reducing visual distraction.'
          }
        ]
      },
      {
        heading: 'Usage',
        content: 'Navigate to YouTube.\nClick the Focus Icon (⌖) in the toolbar.\nToggle the checkboxes to customize your experience instantly.\nSettings are persisted across sessions.'
      }
    ]
  },
  {
    id: 'retro',
    slug: 'retro-ux',
    title: 'Retro UX',
    description: 'Pixel-perfect nostalgia in every click.',
    longDescription: 'Why settle for modern minimalism? Enjoy chunky borders, hard shadows, and satisfying click sounds. Fully customizable 8-bit themes included.',
    capabilities: ['8-bit Themes', 'CRT Filters', 'Click Sounds', 'Custom Cursors'],
    icon: 'joystick',
    mockUrl: 'browser://themes',
    placeholderImage: 'https://placehold.co/1200x800/1a1d20/dfd2b9?text=Retro+Theme+Settings',
    sections: [
      {
        heading: 'Design Philosophy',
        content: '"Retro Cyberpunk / 8-Bit Terminal"\n\nThe browser is designed to feel like a piece of software from an alternate 1990s timeline. It rejects modern "clean" minimalism in favor of:\n\n- Rawness: Exposed borders, high contrast, and terminal aesthetics.\n- Sturdiness: UI elements feel "heavy" and tactile (hard shadows).\n- Nostalgia: Pixelated icons and fonts reminiscent of DOS or early Windows.'
      },
      {
        heading: 'Color Palette',
        content: 'The theme relies on a strict set of variables defined in the codebase.',
        subsections: [
          {
            title: 'Background & Surface',
            content: '--shark (#1a1d20): Deep, dark grey/blue. Used for the main body.\n--outer-space (#31383f): Slightly lighter. Used for toolbars and active tabs.'
          },
          {
            title: 'Accent & Text',
            content: '--cosmic (#733864): Muted Purple. Used for hover states and major buttons.\n--bone (#dfd2b9): Warm white/beige. Easy on the eyes for high contrast.'
          },
          {
            title: 'Functional Colors',
            content: '--slate-gray (#6d7a8c): Cool gray. Used for distinct, hard edges.\n--bistre (#362b1b): Dark brown. Used for URL bars and text areas.\n--retro-yellow (#ffff00): Pure terminal yellow. Used for warnings or "glowing" text.'
          }
        ]
      },
      {
        heading: 'Typography',
        content: 'The browser uses two distinct typefaces to convey its identity.',
        subsections: [
          {
            title: 'Headings & Brand',
            content: 'Font: Press Start 2P\nStyle: 8-bit, pixelated, blocky.\nUsage: App logo, error page headers, main section titles.\nSource: Google Fonts'
          },
          {
            title: 'UI & Content',
            content: 'Font: Courier New (System Monospace)\nStyle: Typewriter/Terminal.\nUsage: URL bar, settings, body text, data tables, logs.\nWhy: It ensures character alignment (tabular nums) which is crucial for the data extraction features.'
          }
        ]
      },
      {
        heading: 'UI Components & Patterns',
        subsections: [
          {
            title: 'Buttons',
            content: 'No Border Radius: All buttons are perfect rectangles. 0px radius.\nHard Shadows: box-shadow: 2px 2px 0px #000; gives a "pressed" feel.\nHover State: Background shifts to Cosmic (#733864). Borders light up to Bone (#dfd2b9).\nActive State: The button physically moves: transform: translate(2px, 2px); to cover its own shadow.'
          },
          {
            title: 'Inputs (URL Bar)',
            content: 'Inset Shadow: box-shadow: inset 2px 2px 0px #333; creates depth, making it look like a CRT screen recess.\nFocus: Becomes absolute black #000 to simulate a terminal prompt.'
          },
          {
            title: 'Icons & Panels',
            content: 'Icons: Solid, sharp icons preferred over rounded ones.\nPanels: A slight "bounce" when opening, mimicking mechanical movement. Borders are thick and separated from the main content.'
          }
        ]
      },
      {
        heading: 'CSS Snippets',
        content: 'Use these variables to instantly theme any new HTML component:\n\n:root {\n  --cosmic: #733864;\n  --bone: #dfd2b9;\n  --shark: #1a1d20;\n  --slate-gray: #6d7a8c;\n  --outer-space: #31383f;\n  --border-width: 2px;\n}\n\n/* The signature button style */\n.retro-btn {\n  background: var(--shark);\n  border: var(--border-width) solid var(--slate-gray);\n  color: var(--bone);\n  box-shadow: 2px 2px 0px #000;\n  cursor: pointer;\n  transition: none; /* No smooth fades! */\n}\n\n.retro-btn:active {\n  box-shadow: none;\n  transform: translate(2px, 2px);\n}'
      }
    ]
  },
];