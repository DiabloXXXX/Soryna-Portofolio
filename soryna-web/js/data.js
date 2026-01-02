const projects = [
    {
        id: "leads-scraper",
        title: "Leads Scraper Simple",
        category: "Tools",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
        description: "Tools sederhana untuk mengambil data calon pelanggan dari website target.",
        longDescription: "Tools sederhana untuk mengambil data calon pelanggan (leads) dari website target, lalu menyimpannya ke file CSV agar mudah diolah.",
        features: [
            "Ambil data: nama, kontak (jika ada), dan link halaman",
            "Filter berdasarkan kata kunci tertentu",
            "Export ke CSV untuk dipakai ulang",
            "Dilengkapi tutorial setup dan cara pakai"
        ],
        price: "Rp225.000",
        priceNote: "sekali bayar (lifetime)",
        link: "product.html?id=leads-scraper",
        tags: ["Scraping", "Automation", "Data"],
        whatsappTemplate: "[ORDER LEADS SCRAPER SIMPLE]%0ANama :%0ATarget website:%0AMetode bayar:%0APenggunaan utama:"
    },
    {
        id: "discord-bot",
        title: "Discord Community Bot",
        category: "AI/ML Solutions",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=1470&q=80",
        description: "Bot komunitas Discord dengan fitur moderasi otomatis dan integrasi AI.",
        longDescription: "Bot canggih untuk mengelola komunitas Discord Anda. Dilengkapi dengan auto-moderation untuk mencegah spam, sapaan member baru otomatis, dan integrasi AI untuk tanya jawab dasar.",
        features: [
            "Auto-moderation (anti-spam, bad words filter)",
            "Welcome message custom dengan gambar",
            "AI Chat integration untuk support",
            "Role management otomatis"
        ],
        price: "Rp150.000",
        priceNote: "/bulan",
        link: "product.html?id=discord-bot",
        tags: ["Discord", "Bot", "Community"],
        whatsappTemplate: "[ORDER DISCORD BOT]%0ANama :%0ANama Server:%0AKeperluan:"
    },
    {
        id: "instagram-scheduler",
        title: "Instagram Scheduler",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1470&q=80",
        description: "Aplikasi penjadwalan konten Instagram otomatis untuk efisiensi marketing.",
        longDescription: "Hemat waktu Anda dengan menjadwalkan konten Instagram seminggu penuh dalam sekali duduk. Support post feed, story, dan reels.",
        features: [
            "Schedule Feed & Story",
            "Auto-post (tanpa notifikasi manual)",
            "Hashtag generator",
            "Analytics sederhana"
        ],
        price: "Rp99.000",
        priceNote: "/bulan",
        link: "product.html?id=instagram-scheduler",
        tags: ["Instagram", "Social Media", "Marketing"],
        whatsappTemplate: "[ORDER IG SCHEDULER]%0ANama :%0AAkun IG:%0ADurasi:"
    },
    {
        id: "telegram-bot",
        title: "Telegram Auto Reply",
        category: "AI/ML Solutions",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1470&q=80",
        description: "Bot Telegram untuk balasan otomatis customer service 24/7.",
        longDescription: "Pastikan customer Anda selalu terlayani 24/7 dengan bot auto-reply cerdas. Bisa dikonfigurasi untuk menjawab FAQ dan meneruskan pesan kompleks ke admin.",
        features: [
            "Keyword-based auto reply",
            "Menu button interaktif",
            "Broadcast pesan ke subscribers",
            "Forward ke Customer Service manusia"
        ],
        price: "Rp300.000",
        priceNote: "setup fee (sekali bayar)",
        link: "product.html?id=telegram-bot",
        tags: ["Telegram", "Automation", "CS"],
        whatsappTemplate: "[ORDER TELEGRAM BOT]%0ANama :%0AKebtuhan Bot:%0A"
    },
    {
        id: "whatsapp-bot",
        title: "WhatsApp Broadcast Bot",
        category: "Tools",
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1470&q=80",
        description: "Kirim pesan broadcast ke ribuan kontak WhatsApp dengan aman.",
        longDescription: "Solusi marketing via WhatsApp tanpa pusing. Kirim info promo, update produk, atau sapaan pelanggan ke ribuan database nomor dengan aman dan delay yang bisa diatur.",
        features: [
            "Import kontak dari Excel/CSV",
            "Spin text (variasi pesan) agar aman",
            "Report pengiriman sukses/gagal",
            "Support lampiran gambar/file"
        ],
        price: "Rp450.000",
        priceNote: "license per PC (lifetime)",
        link: "product.html?id=whatsapp-bot",
        tags: ["WhatsApp", "Broadcast", "Marketing"],
        whatsappTemplate: "[ORDER WA BROADCAST]%0ANama :%0AJumlah Device:%0A"
    },
    {
        id: "report-generator",
        title: "Auto Report Generator",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
        description: "Generate laporan bulanan otomatis dari berbagai sumber data.",
        longDescription: "Otomatisasi pembuatan laporan rutin Anda. Tarik data dari Excel, Google Sheets, atau Database, lalu format menjadi PDF rapi siap kirim ke bos/klien.",
        features: [
            "Multi-source data input",
            "Custom PDF Template",
            "Auto-email report",
            "Scheduler (Harian/Mingguan/Bulanan)"
        ],
        price: "Hubungi Kami",
        priceNote: "custom solution",
        link: "product.html?id=report-generator",
        tags: ["Reporting", "Automation", "Data"],
        whatsappTemplate: "[KONSULTASI REPORT GENERATOR]%0ANama :%0AJenis Data:%0A"
    }
];
