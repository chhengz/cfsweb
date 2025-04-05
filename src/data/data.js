// (https://jsonplaceholder.typicode.com/posts)

export const HOME_CONTENT = {
  title: "Transforming Traditional Farming with",
  title_span: "Smart IoT Technology",
  description:
    "Monitor cow health, automate feeding, and ensure farm safety — all from your phone!",
  imgUrl:
    "https://thumbs.dreamstime.com/b/high-tech-cow-farm-managed-artificial-intelligence-dashboard-phrase-ai-cows-high-tech-cow-farm-managed-301843265.jpg",
};

export const CONTACT = {
  title: "Let's Talk",
  description:
    "Feature request? Suggestion? or maybe you'd like to be our critic! Here's a form just for that.",
};

export const HERO_CONTENT = {
  title: "Transforming Traditional Farming with Smart IoT Technology",
  subtitle:
    "Monitor cow health, automate feeding, and ensure farm safety — all from your phone!",
  buttonText: "See More",
  imgUrl:
    "https://images.unsplash.com/photo-1574158622687-5d2e0f9a4c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpbGxlJTIwY29udHJvbHxlbnwwfHx8fDE2OTQxMzM0MjE&ixlib=rb-4.0.3&q=80&w=1080",
};

export const ABOUT_CONTENT = {
  title: "About the Project",
  description:
    "This project focuses on building a smart cow farming system using IoT technologies like GPS-enabled collars, environmental sensors, automated feeding systems, and a mobile app for real-time monitoring.",
  list: [
    {
      kayword: "importance",
      title: "Why It Matters",
      text: [
        "Increases productivity",
        "Enhances animal welfare",
        "Saves time and labor",
        "Promotes sustainable farming",
      ],
    },
    {
      kayword: "technologies",
      title: "Key Technologies",
      text: [
        "ESP32/ESP8266",
        "LoRa",
        "GSM",
        "Blynk App",
        "Cloud Services (AWS)",
        "Solar Panels",
      ],
    },
  ],
};

export const MEMBER_CONTENT = {
  title: "Meet Our Team",
  description: "",
};

export const FEATURE_CONTENT = {
  title: "Features of Our Smart Farm",
  features: [
    { icon: "🐄", text: "Cow Tracking System (GPS)" },
    {
      icon: "🌡️",
      text: "Environmental Monitoring (Temp, Humidity, Air Quality)",
    },
    { icon: "🥕", text: "Automated Feeding Control" },
    { icon: "📶", text: "WiFi / LoRa / GSM Connectivity" },
    { icon: "☁️", text: "Cloud-Based Data Logging" },
    { icon: "🔔", text: "Real-Time Alerts & Notifications" },
    { icon: "🔋", text: "Solar-Powered Operation" },
    { icon: "📊", text: "Mobile & Web Dashboard" },
  ],
};

export const PROCESS_CONTENT = {
  title: "How It Works",
  steps: [
    {
      icon: "🔹1.",
      title: "Data Collection",
      description:
        "Sensors collect temperature, humidity, and air quality. GPS-enabled collars track cow movement.",
    },
    {
      icon: "🔹2.",
      title: "Data Transmission",
      description:
        "Devices like ESP32 send data through WiFi, LoRa, or GSM to a cloud platform.",
    },
    {
      icon: "🔹3.",
      title: "Cloud Integration",
      description:
        "Data is stored and processed on AWS/Google Cloud, allowing real-time monitoring and analytics.",
    },
    {
      icon: "🔹4.",
      title: "User Interface",
      description:
        "A mobile app (Blynk) or website dashboard displays live farm conditions and sends alerts.",
    },
    {
      icon: "🔹5.",
      title: "Automation",
      description:
        "Feeding schedules and environment controls can be automated using smart actuators.",
    },
  ],
};
