export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    longDescription: string;
    features: string[];
    price: string;
    priceNote: string;
    link: string;
    tags: string[];
    whatsappTemplate: string;
}

export const projects: Project[] = [
    // === WEB DEVELOPMENT ===
    {
        id: "company-profile",
        title: "Company Profile Website",
        category: "Pengembangan Web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1470&q=80",
        description: "Website company profile modern dan responsif untuk meningkatkan kredibilitas bisnis Anda.",
        longDescription: "Website company profile profesional dengan desain modern, responsif di semua perangkat, dan optimasi SEO. Cocok untuk UMKM hingga perusahaan besar.",
        features: ["Desain Modern & Responsif", "Optimasi SEO", "Integrasi Google Analytics", "Form Kontak WhatsApp", "Hosting 1 Tahun Gratis"],
        price: "Rp2.500.000",
        priceNote: "sekali bayar",
        link: "/products/company-profile",
        tags: ["Website", "Company Profile", "SEO"],
        whatsappTemplate: "[ORDER COMPANY PROFILE]%0ANama :%0ANama Perusahaan:%0AKebutuhan:"
    },
    {
        id: "landing-page",
        title: "Landing Page Conversion",
        category: "Pengembangan Web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
        description: "Landing page dengan conversion rate tinggi untuk campaign marketing Anda.",
        longDescription: "Landing page yang dioptimasi untuk konversi tinggi. Sempurna untuk iklan Facebook, Google Ads, atau campaign marketing lainnya.",
        features: ["Desain High-Converting", "A/B Testing Ready", "Speed Optimized", "Mobile First", "Integrasi Pixel & Analytics"],
        price: "Rp1.500.000",
        priceNote: "per halaman",
        link: "/products/landing-page",
        tags: ["Landing Page", "Marketing", "Ads"],
        whatsappTemplate: "[ORDER LANDING PAGE]%0ANama :%0AProduk/Jasa:%0ABudget Iklan:"
    },
    {
        id: "ecommerce-store",
        title: "Toko Online / E-Commerce",
        category: "Pengembangan Web",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1470&q=80",
        description: "Toko online lengkap dengan payment gateway dan manajemen produk.",
        longDescription: "Solusi e-commerce lengkap dengan fitur keranjang belanja, checkout, integrasi pembayaran (Midtrans/Xendit), dan dashboard admin.",
        features: ["Unlimited Produk", "Payment Gateway", "Dashboard Admin", "Manajemen Order", "Laporan Penjualan", "Integrasi Ekspedisi"],
        price: "Rp5.000.000",
        priceNote: "sekali bayar",
        link: "/products/ecommerce-store",
        tags: ["E-Commerce", "Toko Online", "Payment"],
        whatsappTemplate: "[ORDER ECOMMERCE]%0ANama :%0AJenis Produk:%0AJumlah SKU:"
    },
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        category: "Pengembangan Web",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1470&q=80",
        description: "Website portfolio personal untuk freelancer, designer, atau profesional.",
        longDescription: "Website portfolio modern untuk menampilkan karya dan skill Anda. Sempurna untuk freelancer, designer, fotografer, atau profesional kreatif.",
        features: ["Gallery Portfolio", "Blog Integration", "Contact Form", "Social Media Links", "Dark/Light Mode"],
        price: "Rp1.800.000",
        priceNote: "sekali bayar",
        link: "/products/portfolio-website",
        tags: ["Portfolio", "Personal", "Freelancer"],
        whatsappTemplate: "[ORDER PORTFOLIO]%0ANama :%0AProfesi:%0ALink Referensi:"
    },
    {
        id: "wedding-invitation",
        title: "Undangan Pernikahan Digital",
        category: "Undangan Digital",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1470&q=80",
        description: "Undangan pernikahan online yang elegan, bisa dibagikan via link WhatsApp.",
        longDescription: "Undangan pernikahan digital modern dengan fitur countdown, love story, galeri foto, RSVP online, dan musik latar. Hemat kertas dan mudah dibagikan!",
        features: ["Desain Elegan & Responsif", "Countdown Pernikahan", "Galeri Foto", "RSVP Online", "Google Maps Lokasi", "Musik Latar", "Unlimited Guest"],
        price: "Rp350.000",
        priceNote: "sekali bayar",
        link: "/products/wedding-invitation",
        tags: ["Undangan", "Wedding", "Digital"],
        whatsappTemplate: "[ORDER UNDANGAN NIKAH]%0ANama Pasangan:%0ATanggal Acara:%0AReferensi Design:"
    },
    {
        id: "birthday-invitation",
        title: "Undangan Ulang Tahun Digital",
        category: "Undangan Digital",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1470&q=80",
        description: "Undangan ulang tahun online yang ceria dan menarik untuk semua usia.",
        longDescription: "Undangan ulang tahun digital yang fun dan colorful! Cocok untuk anak-anak maupun dewasa. Dilengkapi animasi, musik, dan konfirmasi kehadiran online.",
        features: ["Desain Fun & Colorful", "Animasi Menarik", "Konfirmasi Kehadiran", "Info Tema Pesta", "Google Maps", "Countdown Hari H", "Gift Registry"],
        price: "Rp250.000",
        priceNote: "sekali bayar",
        link: "/products/birthday-invitation",
        tags: ["Undangan", "Birthday", "Digital"],
        whatsappTemplate: "[ORDER UNDANGAN ULANG TAHUN]%0ANama:%0AUmur/Tanggal:%0ATema Pesta:"
    },
    {
        id: "general-invitation",
        title: "Undangan Acara Custom",
        category: "Undangan Digital",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1470&q=80",
        description: "Undangan digital untuk semua jenis acara: wisuda, khitanan, gathering, dll.",
        longDescription: "Undangan digital serbaguna yang bisa disesuaikan untuk berbagai acara: wisuda, khitanan, reunian, seminar, gathering, dan acara lainnya. Desain professional dan mudah dishare!",
        features: ["Custom Desain Sesuai Tema", "RSVP & Konfirmasi", "Detail Acara Lengkap", "Peta Lokasi", "Countdown Timer", "Contact Person", "Dress Code Info"],
        price: "Rp200.000",
        priceNote: "sekali bayar",
        link: "/products/general-invitation",
        tags: ["Undangan", "Custom", "Event"],
        whatsappTemplate: "[ORDER UNDANGAN ACARA]%0ANama:%0AJenis Acara:%0ATanggal:"
    },
    {
        id: "sales-website-crud",
        title: "Website Penjualan + Kelola Produk",
        category: "Pengembangan Web",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1470&q=80",
        description: "Website toko online lengkap dengan fitur tambah, edit, hapus produk sendiri.",
        longDescription: "Website toko online yang bisa Anda kelola sendiri! Dilengkapi panel admin untuk menambah produk baru, mengedit harga, upload foto, dan hapus produk tanpa perlu bantuan programmer. Praktis dan mudah!",
        features: ["Panel Admin Mudah", "Tambah/Edit/Hapus Produk", "Upload Foto Produk", "Kelola Kategori", "Atur Harga & Diskon", "Lihat Pesanan Masuk", "Whatsapp Order Button"],
        price: "Rp3.500.000",
        priceNote: "sekali bayar",
        link: "/products/sales-website-crud",
        tags: ["Website", "Toko Online", "CRUD", "Admin Panel"],
        whatsappTemplate: "[ORDER WEBSITE PENJUALAN]%0ANama:%0AJenis Produk:%0AJumlah Produk Awal:"
    },

    // === CHATBOTS & AUTOMATION ===
    {
        id: "whatsapp-chatbot",
        title: "WhatsApp Chatbot AI",
        category: "Solusi AI/ML",
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1470&q=80",
        description: "Chatbot WhatsApp dengan AI untuk customer service 24/7 otomatis.",
        longDescription: "Chatbot WhatsApp cerdas yang bisa menjawab FAQ, memproses order, dan meneruskan ke CS manusia untuk pertanyaan kompleks. Dilengkapi AI untuk pemahaman bahasa natural.",
        features: ["AI-Powered Responses", "FAQ Automation", "Order Processing", "Human Handover", "Multi-Language", "Analytics Dashboard"],
        price: "Rp3.500.000",
        priceNote: "setup + Rp500k/bulan",
        link: "/products/whatsapp-chatbot",
        tags: ["WhatsApp", "Chatbot", "AI", "Customer Service"],
        whatsappTemplate: "[ORDER WA CHATBOT]%0ANama :%0ANama Bisnis:%0AJumlah Chat/Hari:"
    },
    {
        id: "telegram-bot",
        title: "Telegram Bot Custom",
        category: "Solusi AI/ML",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1470&q=80",
        description: "Bot Telegram untuk komunitas, notifikasi, atau automation bisnis.",
        longDescription: "Bot Telegram custom untuk berbagai kebutuhan: moderasi grup, notifikasi otomatis, broadcast message, atau integrasi dengan sistem Anda.",
        features: ["Custom Commands", "Broadcast System", "Group Moderation", "Webhook Integration", "Database Storage", "Admin Panel"],
        price: "Rp2.000.000",
        priceNote: "sekali bayar",
        link: "/products/telegram-bot",
        tags: ["Telegram", "Bot", "Automation"],
        whatsappTemplate: "[ORDER TELEGRAM BOT]%0ANama :%0AJenis Bot:%0AFitur yang Dibutuhkan:"
    },
    {
        id: "discord-bot",
        title: "Discord Community Bot",
        category: "Solusi AI/ML",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=1470&q=80",
        description: "Bot Discord untuk manajemen komunitas dengan fitur lengkap.",
        longDescription: "Bot canggih untuk mengelola komunitas Discord. Dilengkapi auto-moderation, welcome system, role management, dan fitur engagement.",
        features: ["Auto-Moderation", "Welcome System", "Role Management", "Leveling System", "Music Player", "Custom Commands"],
        price: "Rp1.500.000",
        priceNote: "sekali bayar",
        link: "/products/discord-bot",
        tags: ["Discord", "Bot", "Community"],
        whatsappTemplate: "[ORDER DISCORD BOT]%0ANama :%0ANama Server:%0AJumlah Member:"
    },
    {
        id: "instagram-automation",
        title: "Instagram Automation Tools",
        category: "Tools & Automasi",
        image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=1470&q=80",
        description: "Tools otomasi Instagram untuk scheduling, engagement, dan analytics.",
        longDescription: "Suite lengkap untuk mengelola Instagram Anda: auto-post, story scheduler, hashtag research, analytics, dan auto-engagement (like, comment, follow).",
        features: ["Auto Post & Story", "Hashtag Research", "Engagement Bot", "Analytics Report", "Multiple Accounts", "Content Calendar"],
        price: "Rp750.000",
        priceNote: "/bulan",
        link: "/products/instagram-automation",
        tags: ["Instagram", "Social Media", "Automation"],
        whatsappTemplate: "[ORDER IG AUTOMATION]%0ANama :%0AUsername IG:%0AJumlah Akun:"
    },

    // === TOOLS & UTILITIES ===
    {
        id: "leads-scraper",
        title: "Leads Scraper Pro",
        category: "Tools & Automasi",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
        description: "Tools scraping data leads dari berbagai platform secara otomatis.",
        longDescription: "Tools powerful untuk mengumpulkan data leads dari Google Maps, Instagram, LinkedIn, dan website lainnya. Export ke CSV/Excel untuk follow up.",
        features: ["Multi-Platform Scraping", "Anti-Block System", "Export CSV/Excel", "Proxy Support", "Scheduled Scraping", "Filtering Options"],
        price: "Rp500.000",
        priceNote: "lifetime license",
        link: "/products/leads-scraper",
        tags: ["Scraping", "Leads", "Data"],
        whatsappTemplate: "[ORDER LEADS SCRAPER]%0ANama :%0ATarget Platform:%0AJumlah Leads/Hari:"
    },
    {
        id: "whatsapp-blast",
        title: "WhatsApp Blast Sender",
        category: "Tools & Automasi",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1470&q=80",
        description: "Kirim pesan broadcast WhatsApp ke ribuan kontak dengan aman.",
        longDescription: "Tools broadcast WhatsApp yang aman dengan fitur anti-ban. Support spin text, delay random, dan laporan pengiriman lengkap.",
        features: ["Bulk Sender", "Anti-Ban System", "Spin Text", "Random Delay", "Image/File Support", "Delivery Report"],
        price: "Rp450.000",
        priceNote: "lifetime license",
        link: "/products/whatsapp-blast",
        tags: ["WhatsApp", "Broadcast", "Marketing"],
        whatsappTemplate: "[ORDER WA BLAST]%0ANama :%0AJumlah Kontak:%0AFrekuensi Blast:"
    },
    {
        id: "auto-report",
        title: "Auto Report Generator",
        category: "Tools & Automasi",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
        description: "Generate laporan otomatis dari Google Sheets atau database.",
        longDescription: "Otomatisasi pembuatan laporan. Tarik data dari berbagai sumber, generate PDF profesional, dan kirim otomatis via email/WhatsApp.",
        features: ["Multi Data Source", "PDF Generation", "Auto Email/WA", "Scheduled Reports", "Custom Template", "Chart & Graphs"],
        price: "Rp2.500.000",
        priceNote: "custom solution",
        link: "/products/auto-report",
        tags: ["Report", "Automation", "Business"],
        whatsappTemplate: "[ORDER AUTO REPORT]%0ANama :%0AJenis Data:%0AFrekuensi Laporan:"
    },
    {
        id: "pos-system",
        title: "Point of Sale (POS) System",
        category: "Pengembangan Web",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1470&q=80",
        description: "Sistem kasir modern untuk toko retail atau F&B.",
        longDescription: "Sistem POS lengkap untuk bisnis retail atau F&B. Kasir digital, manajemen stok, laporan penjualan, dan integrasi printer thermal.",
        features: ["Kasir Digital", "Inventory Management", "Sales Report", "Multi Outlet", "Thermal Printer", "Offline Mode"],
        price: "Rp4.000.000",
        priceNote: "sekali bayar",
        link: "/products/pos-system",
        tags: ["POS", "Kasir", "Retail", "F&B"],
        whatsappTemplate: "[ORDER POS SYSTEM]%0ANama :%0AJenis Bisnis:%0AJumlah Outlet:"
    },

    // === AI SOLUTIONS ===
    {
        id: "ai-content-writer",
        title: "AI Content Writer",
        category: "Solusi AI/ML",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1470&q=80",
        description: "Tools AI untuk generate konten artikel, copywriting, dan social media.",
        longDescription: "Platform AI untuk membuat konten berkualitas tinggi. Support artikel blog, caption social media, copywriting iklan, dan email marketing.",
        features: ["Article Generator", "Social Media Copy", "Ad Copywriting", "SEO Optimization", "Multiple Languages", "Brand Voice"],
        price: "Rp350.000",
        priceNote: "/bulan",
        link: "/products/ai-content-writer",
        tags: ["AI", "Content", "Copywriting"],
        whatsappTemplate: "[ORDER AI WRITER]%0ANama :%0AJenis Konten:%0AVolume/Bulan:"
    },
    {
        id: "image-ai-generator",
        title: "AI Image Generator",
        category: "Solusi AI/ML",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1470&q=80",
        description: "Generate gambar unik dengan AI untuk kebutuhan desain dan marketing.",
        longDescription: "Tools AI untuk membuat gambar unik. Cocok untuk ilustrasi produk, thumbnail, social media, atau kebutuhan desain lainnya.",
        features: ["Text to Image", "Image Editing", "Style Transfer", "Batch Generation", "High Resolution", "Commercial License"],
        price: "Rp250.000",
        priceNote: "/bulan (100 credits)",
        link: "/products/image-ai-generator",
        tags: ["AI", "Image", "Design"],
        whatsappTemplate: "[ORDER AI IMAGE]%0ANama :%0AKebutuhan Gambar:%0AVolume/Bulan:"
    },
    {
        id: "voice-ai-assistant",
        title: "Voice AI Assistant",
        category: "Solusi AI/ML",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1470&q=80",
        description: "Asisten suara AI untuk customer service telepon otomatis.",
        longDescription: "Sistem AI voice untuk handle panggilan telepon otomatis. Cocok untuk konfirmasi order, reminder, atau customer service 24/7.",
        features: ["Voice Recognition", "Natural Conversation", "Call Recording", "CRM Integration", "Multi-language", "Analytics"],
        price: "Rp5.000.000",
        priceNote: "setup + Rp1jt/bulan",
        link: "/products/voice-ai-assistant",
        tags: ["AI", "Voice", "Call Center"],
        whatsappTemplate: "[ORDER VOICE AI]%0ANama :%0AJenis Bisnis:%0AVolume Call/Hari:"
    },
    {
        id: "data-analytics-dashboard",
        title: "Custom Analytics Dashboard",
        category: "Solusi AI/ML",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
        description: "Dashboard analytics custom untuk visualisasi data bisnis Anda.",
        longDescription: "Dashboard analytics custom yang menampilkan KPI dan metrics penting bisnis Anda. Integrasi dengan berbagai sumber data.",
        features: ["Real-time Data", "Custom Charts", "Multi Data Source", "Export Reports", "Mobile Friendly", "Alert System"],
        price: "Rp3.500.000",
        priceNote: "sekali bayar",
        link: "/products/data-analytics-dashboard",
        tags: ["Analytics", "Dashboard", "Business Intelligence"],
        whatsappTemplate: "[ORDER DASHBOARD]%0ANama :%0AJenis Data:%0AKPI yang Dibutuhkan:"
    }
];
