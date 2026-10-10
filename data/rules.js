/* All facts live here. Edit the text, save, and reload. Last checked: October 2026 */
window.RULES = {
  "lastVerified": "October 2026",
  "pension": [
    {
      "name": {
        "en": "Shravanbal Seva Rajya Pension (Maharashtra)",
        "hi": "श्रावणबाळ सेवा राज्य पेंशन (महाराष्ट्र)",
        "mr": "श्रावणबाळ सेवा राज्य निवृत्तीवेतन योजना (महाराष्ट्र)"
      },
      "minAge": 65,
      "maxIncome": 21000,
      "amount": {
        "en": "Rs. 1,500 per month (older websites show a lower amount, so confirm at the office)",
        "hi": "₹1,500 प्रति माह (पुरानी वेबसाइटों पर कम रकम दिखती है, इसलिए दफ़्तर में पक्का कर लें)",
        "mr": "दरमहा ₹1,500 (जुन्या संकेतस्थळांवर कमी रक्कम दिसते, म्हणून कार्यालयात खात्री करा)"
      },
      "apply": {
        "en": "Talathi or Tahsildar office, or the Aaple Sarkar website. You must have lived in Maharashtra for 15 years and family income must be up to Rs. 21,000 a year.",
        "hi": "तलाठी या तहसीलदार कार्यालय, या आपले सरकार वेबसाइट। महाराष्ट्र में 15 साल रहना ज़रूरी है और परिवार की सालाना आमदनी ₹21,000 तक होनी चाहिए।",
        "mr": "तलाठी किंवा तहसीलदार कार्यालय, किंवा आपले सरकार संकेतस्थळ. महाराष्ट्रात 15 वर्षे राहणे आवश्यक आहे आणि कुटुंबाचे वार्षिक उत्पन्न ₹21,000 पर्यंत असावे."
      }
    }
  ],
  "ayushman": {
    "minAge": 70,
    "cover": {
      "en": "Rs. 5 lakh per year, free, no income limit",
      "hi": "₹5 लाख प्रति वर्ष, मुफ़्त, आमदनी की कोई सीमा नहीं",
      "mr": "दरवर्षी ₹5 लाख, मोफत, उत्पन्नाची अट नाही"
    }
  },
  "transit": [
    {
      "key": "bus",
      "minAge": 65,
      "freeAge": 75,
      "discount": "50%",
      "proof": {
        "en": "Aadhaar card or any ID that shows your age",
        "hi": "आधार कार्ड या उम्र दिखाने वाला कोई पहचान पत्र",
        "mr": "आधार कार्ड किंवा वय दाखवणारे कोणतेही ओळखपत्र"
      }
    }
  ],
  "banks": [
    {
      "bank": "HDFC Bank",
      "rates": {
        "1": 6.75,
        "3": 6.95,
        "5": 6.9
      },
      "asOf": "Oct 2026 (approx.)",
      "site": "https://www.hdfcbank.com/"
    },
    {
      "bank": "ICICI Bank",
      "rates": {
        "1": 6.75,
        "3": 6.95,
        "5": 6.9
      },
      "asOf": "Oct 2026 (approx.)",
      "site": "https://www.icicibank.com/"
    },
    {
      "bank": "State Bank of India",
      "rates": {
        "5": 7.05
      },
      "asOf": "Oct 2026 (approx.)",
      "site": "https://sbi.co.in/"
    },
    {
      "bank": "Punjab National Bank",
      "rates": {
        "1": 6.6,
        "3": 6.75,
        "5": 6.7
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://www.pnbindia.in/"
    },
    {
      "bank": "Bank of Baroda",
      "rates": {
        "1": 6.6,
        "3": 6.75,
        "5": 6.7
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://www.bankofbaroda.in/"
    },
    {
      "bank": "Canara Bank",
      "rates": {
        "1": 6.6,
        "3": 6.7,
        "5": 6.7
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://canarabank.com/"
    },
    {
      "bank": "Axis Bank",
      "rates": {
        "1": 6.7,
        "3": 6.9,
        "5": 6.85
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://www.axisbank.com/"
    },
    {
      "bank": "Kotak Mahindra Bank",
      "rates": {
        "1": 6.7,
        "3": 6.9,
        "5": 6.85
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://www.kotak.com/"
    },
    {
      "bank": "Bank of Maharashtra",
      "rates": {
        "1": 6.6,
        "3": 6.65,
        "5": 6.6
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://bankofmaharashtra.in/"
    },
    {
      "bank": "Union Bank of India",
      "rates": {
        "1": 6.7,
        "3": 6.8,
        "5": 6.7
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://www.unionbankofindia.co.in/"
    },
    {
      "bank": "Indian Bank",
      "rates": {
        "1": 6.7,
        "3": 6.7,
        "5": 6.65
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://indianbank.in/"
    },
    {
      "bank": "Bank of India",
      "rates": {
        "1": 6.65,
        "3": 6.75,
        "5": 6.7
      },
      "asOf": "SAMPLE - confirm at bank",
      "site": "https://bankofindia.co.in/"
    }
  ],
  "checklists": {
    "pension": {
      "en": [
        "Aadhaar card",
        "Age proof (birth certificate or school certificate)",
        "Income certificate",
        "Bank passbook (first page)",
        "Passport size photo",
        "Domicile certificate (15 years in Maharashtra)"
      ],
      "hi": [
        "आधार कार्ड",
        "उम्र का प्रमाण (जन्म प्रमाणपत्र या स्कूल प्रमाणपत्र)",
        "आय प्रमाणपत्र",
        "बैंक पासबुक (पहला पृष्ठ)",
        "पासपोर्ट साइज़ फोटो",
        "अधिवास प्रमाणपत्र (महाराष्ट्र में 15 साल)"
      ],
      "mr": [
        "आधार कार्ड",
        "वयाचा पुरावा (जन्म दाखला किंवा शाळेचा दाखला)",
        "उत्पन्नाचा दाखला",
        "बँक पासबुक (पहिले पान)",
        "पासपोर्ट आकाराचा फोटो",
        "अधिवास प्रमाणपत्र (महाराष्ट्रात 15 वर्षे)"
      ]
    },
    "card": {
      "en": [
        "Aadhaar card",
        "Mobile number linked to Aadhaar",
        "Ration card (if you have one)"
      ],
      "hi": [
        "आधार कार्ड",
        "आधार से जुड़ा मोबाइल नंबर",
        "राशन कार्ड (यदि हो)"
      ],
      "mr": [
        "आधार कार्ड",
        "आधारशी जोडलेला मोबाइल नंबर",
        "रेशन कार्ड (असल्यास)"
      ]
    },
    "fd": {
      "en": [
        "Aadhaar card",
        "PAN card",
        "Passport size photo",
        "Address proof",
        "Bank account details"
      ],
      "hi": [
        "आधार कार्ड",
        "पैन कार्ड",
        "पासपोर्ट साइज़ फोटो",
        "पते का प्रमाण",
        "बैंक खाते की जानकारी"
      ],
      "mr": [
        "आधार कार्ड",
        "पॅन कार्ड",
        "पासपोर्ट आकाराचा फोटो",
        "पत्त्याचा पुरावा",
        "बँक खात्याची माहिती"
      ]
    }
  },
  "helplines": [
    {
      "label": {
        "en": "Elderline (senior citizens)",
        "hi": "एल्डरलाइन (वरिष्ठ नागरिक)",
        "mr": "एल्डरलाइन (ज्येष्ठ नागरिक)"
      },
      "number": "14567"
    },
    {
      "label": {
        "en": "Emergency",
        "hi": "आपातकालीन",
        "mr": "आणीबाणी"
      },
      "number": "112"
    },
    {
      "label": {
        "en": "Ambulance",
        "hi": "एम्बुलेंस",
        "mr": "रुग्णवाहिका"
      },
      "number": "108"
    },
    {
      "label": {
        "en": "Women helpline",
        "hi": "महिला हेल्पलाइन",
        "mr": "महिला हेल्पलाइन"
      },
      "number": "181"
    },
    {
      "label": {
        "en": "Women in distress (police)",
        "hi": "संकट में महिला (पुलिस)",
        "mr": "संकटात असलेल्या महिला (पोलीस)"
      },
      "number": "1091"
    },
    {
      "label": {
        "en": "Cyber fraud",
        "hi": "साइबर ठगी",
        "mr": "सायबर फसवणूक"
      },
      "number": "1930"
    },
    {
      "label": {
        "en": "Ayushman (PM-JAY)",
        "hi": "आयुष्मान (PM-JAY)",
        "mr": "आयुष्मान (PM-JAY)"
      },
      "number": "14555"
    },
    {
      "label": {
        "en": "Railway enquiry",
        "hi": "रेल पूछताछ",
        "mr": "रेल्वे चौकशी"
      },
      "number": "139"
    }
  ],
  "official": {
    "pension": [
      {
        "label": {
          "en": "Aaple Sarkar: apply for pension online",
          "hi": "आपले सरकार: ऑनलाइन पेंशन आवेदन",
          "mr": "आपले सरकार: ऑनलाइन पेन्शन अर्ज"
        },
        "url": "https://aaplesarkar.mahaonline.gov.in/"
      }
    ],
    "ayushman": [
      {
        "label": {
          "en": "Get your Ayushman card online (NHA portal)",
          "hi": "आयुष्मान कार्ड ऑनलाइन बनवाएं (NHA पोर्टल)",
          "mr": "आयुष्मान कार्ड ऑनलाइन मिळवा (NHA पोर्टल)"
        },
        "url": "https://beneficiary.nha.gov.in/"
      },
      {
        "label": {
          "en": "PM-JAY official website",
          "hi": "PM-JAY की सरकारी वेबसाइट",
          "mr": "PM-JAY चे अधिकृत संकेतस्थळ"
        },
        "url": "https://pmjay.gov.in/"
      }
    ],
    "transit": {
      "bus": [
        {
          "label": {
            "en": "MSRTC (state bus) official website",
            "hi": "MSRTC (राज्य बस) की सरकारी वेबसाइट",
            "mr": "MSRTC (राज्य बस) अधिकृत संकेतस्थळ"
          },
          "url": "https://msrtc.maharashtra.gov.in/"
        }
      ],
      "rail": [
        {
          "label": {
            "en": "IRCTC (railway tickets and concessions)",
            "hi": "IRCTC (रेल टिकट और रियायत)",
            "mr": "IRCTC (रेल्वे तिकीट आणि सवलत)"
          },
          "url": "https://www.irctc.co.in/"
        }
      ],
      "metro": [
        {
          "label": {
            "en": "Maha Metro official website",
            "hi": "महा मेट्रो की सरकारी वेबसाइट",
            "mr": "महा मेट्रो अधिकृत संकेतस्थळ"
          },
          "url": "https://www.mahametro.org/"
        }
      ]
    },
    "docs": {
      "pension": [
        {
          "label": {
            "en": "Aaple Sarkar: apply for pension online",
            "hi": "आपले सरकार: ऑनलाइन पेंशन आवेदन",
            "mr": "आपले सरकार: ऑनलाइन पेन्शन अर्ज"
          },
          "url": "https://aaplesarkar.mahaonline.gov.in/"
        }
      ],
      "card": [
        {
          "label": {
            "en": "Get your Ayushman card online (NHA portal)",
            "hi": "आयुष्मान कार्ड ऑनलाइन बनवाएं (NHA पोर्टल)",
            "mr": "आयुष्मान कार्ड ऑनलाइन मिळवा (NHA पोर्टल)"
          },
          "url": "https://beneficiary.nha.gov.in/"
        }
      ],
      "fd": []
    },
    "help": [
      {
        "label": {
          "en": "Ministry of Social Justice (senior citizens)",
          "hi": "सामाजिक न्याय मंत्रालय (वरिष्ठ नागरिक)",
          "mr": "सामाजिक न्याय मंत्रालय (ज्येष्ठ नागरिक)"
        },
        "url": "https://socialjustice.gov.in/"
      },
      {
        "label": {
          "en": "Report cyber fraud online",
          "hi": "साइबर ठगी की ऑनलाइन शिकायत",
          "mr": "सायबर फसवणुकीची ऑनलाइन तक्रार"
        },
        "url": "https://cybercrime.gov.in/"
      }
    ]
  }
};
