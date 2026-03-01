// data/projects.ts

export const projects = [
  {
    id: "erpgo", // ID unik untuk URL
    title: "ERPGo - PT Ruang Algo Multimatics",
    desc: "ERPGo is a web-based multi-tenant ERP solution developed to optimize core business operations, including sales, procurement, finance, logistics, HR, and production. The platform integrates a dedicated Point of Sale (POS) module and a separate Online Order system that manages both Customer and Cashier Orders. It is designed to support SMEs and institutions in integrating their workflows through real-time data access and centralized control.",
    tags: ["Fullstack", "TypeScript", "Nuxt.js", "System Architecture", "Web"],
    images: [
      "/projects/erp_1.png", 
      "/projects/erp_2.png",
      "/projects/erp_3.png",
      "/projects/erp_4.png",
      "/projects/erp_5.png",
      "/projects/erp_6.png",
      "/projects/erp_7.png",
      "/projects/erp_8.png",
      "/projects/erp_9.png",
      "/projects/erp_10.png",
      "/projects/erp_11.png",
    ],
  },
  {
    id: "clinicalgo",
    title: "CLINICALgo - PT Ruang Algo Multimatics",
    desc: "CLINICALgo is a comprehensive web-based Clinic Management System designed to streamline healthcare operations. It centralizes patient administration, electronic medical records (EMR), and appointment scheduling, alongside essential clinic management features like pharmacy inventory and billing to enhance service delivery and operational efficiency",
    tags: ["Fullstack", "TypeScript", "Nuxt.js", "Loopback.io", "System Architecture", "Web"],
    images: [
      "/projects/digi_1.png",
      "/projects/digi_2.png",
      "/projects/digi_3.png",
      "/projects/digi_4.png"
    ],
  },
  {
    id: "brew-chat",
    title: "Brew Chat - Lambung Mangkurat University",
    desc: "Brew Chat is a mobile community platform connecting coffee enthusiasts through real-time group messaging. The app features location-based services to recommend nearby coffee shops and provides visitor traffic insights, allowing users to gauge venue popularity and crowd levels.",
    tags: ["Node.js", "Socket.io", "Mobile App"],
    images: [
      "/projects/brew_1.png",
      "/projects/brew_2.png"
    ],
  },
  {
    id: "sentiment-dpr",
    title: "Twitter Sentiment Analysis: #BubarkanDPR",
    desc: "A text mining project analyzing public sentiment on Twitter during massive protests and civil unrest directed at the parliament. The data pipeline involved crawling tweets using Tweepy, preprocessing text with Sastrawi, and extracting features via TF-IDF (Unigram and Bigram). Five machine learning algorithms were evaluated using K-Fold Cross-Validation, with the Linear SVM model achieving the highest performance at 94.60% accuracy and a 94.91% F1 Score.",
    tags: ["Python", "Machine Learning", "NLP", "SVM", "Tweepy", "TF-IDF"],
    images: [
        "/projects/bubarkan_2.png",
        "/projects/bubarkan_3.png",

        "/projects/bubarkan_1.png",
    ], // Kosongkan jika belum ada gambar
  },
  {
    id: "sentiment-sumatera",
    title: "Twitter Sentiment Analysis: #Sumatera",
    desc: "A text mining project analyzing public sentiment on Twitter regarding hydrometeorological disasters (floods and landslides) in Sumatra. The study assesses public criticism of legislative bodies concerning disaster mitigation infrastructure. The pipeline involved data crawling using Tweepy, text preprocessing with Sastrawi, and automatic labeling using InSet Lexicon. Evaluated across five machine learning algorithms, the Linear SVM model achieved the highest accuracy of 95.10% on lexicon-labeled data, while Logistic Regression performed best on manually labeled data at 80.00%.",
    tags: ["Python", "Machine Learning", "NLP", "SVM", "Logistic Regression"],
    images: [
        "/projects/sumatera_1.png",
        "/projects/sumatera_2.png",
        "/projects/sumatera_3.png",
        "/projects/sumatera_4.png",
        "/projects/sumatera_5.png",
        "/projects/sumatera_6.png"
    ],
  },
  {
    id: "iris-cnn",
    title: "Iris Flower Species Classification using CNNs",
    desc: "A computer vision project focused on classifying Iris flower species from digital images. The study involved building a custom baseline Convolutional Neural Network (CNN), applying data augmentation, and performing hyperparameter tuning using Keras Tuner (Hyperband). Furthermore, Transfer Learning and Fine-Tuning techniques were implemented utilizing pre-trained MobileNetV2 and ResNet50 architectures. The fine-tuned ResNet50 model achieved the highest validation accuracy of 69.04%.",
    tags: ["Python", "Computer Vision", "TensorFlow/Keras", "CNN", "Transfer Learning", "ResNet50"],
    images: [
      "/projects/iris_1.png",
      "/projects/iris_2.png",
      "/projects/iris_3.png",
      "/projects/iris_4.png",
      "/projects/iris_5.png"
    ],
  }
];