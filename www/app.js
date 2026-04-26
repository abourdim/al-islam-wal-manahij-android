/* الإسلام والمناهج الاشتراكية — ISLAM & SOCIALIST SYSTEMS — app.js v2.0 */
/* Based on "Al-Islam wal-Manahij al-Ishtirakiyyah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الإسلام والمناهج الاشتراكية',
    splashSub: 'الوسطية الإسلامية في الاقتصاد والمجتمع',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ٢: ١٤٣',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الاقتصاد الإسلامي',
    cardsDesc: '١٥ بطاقة من كتاب الإسلام والمناهج الاشتراكية — كل بطاقة تكشف حقيقة عن النظام الإسلامي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن الاقتصاد الإسلامي — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي الاقتصادية',
    progressDesc: 'تقدمك وإنجازاتك في فهم الاقتصاد الإسلامي',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية البركة والرزق',
    dailyLabel: '✨ فكرة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ بطاقة عن الاقتصاد الإسلامي',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Islam & Socialist Systems',
    splashSub: 'Islamic moderation in economics and society',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 2:143',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Islamic Economics Cards',
    cardsDesc: '15 cards from Islam and Socialist Systems — each reveals a truth about the Islamic system',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic economics — 4 choices per question',
    progressTitle: 'My Economics Journey',
    progressDesc: 'Your progress and achievements in understanding Islamic economics',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Blessings & Provision',
    dailyLabel: "✨ Today's Insight",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cards on Islamic economics',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: "L\'Islam et les Systemes Socialistes",
    splashSub: "La moderation islamique en economie et societe",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 2:143',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: "Cartes d'Economie Islamique",
    cardsDesc: "15 cartes du livre L'Islam et les Systemes Socialistes — chacune revele une verite sur le systeme islamique",
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: "Testez vos connaissances sur l'economie islamique — 4 choix par question",
    progressTitle: 'Mon Parcours Economique',
    progressDesc: "Vos progres et realisations dans la comprehension de l'economie islamique",
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Benediction et la Subsistance',
    dailyLabel: '✨ Idee du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      "15 cartes sur l'economie islamique",
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'⚖️',
    ar:{title:'الوسطية الاقتصادية',desc:'يقف الغزالي موقفاً وسطاً: الإسلام ليس رأسمالياً ولا اشتراكياً. يقبل الملكية الخاصة لكن يضع عليها ضوابط العدالة. في هذا الكتاب يبين أن الإسلام يقدم نظاماً فريداً يجمع بين الحافز الفردي والتكافل الاجتماعي — وليس مجرد وسط بين نظامين غربيين.',verse:'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ١٤٣',hadith:'خير الأمور أوسطها — حديث حسن',action:'تعلم الفرق بين الإسلام والاشتراكية في موضوع واحد اليوم وناقشه مع عائلتك',young:'الإسلام يقول: كن عادلاً! لا تأخذ حق غيرك ولا تنسَ مساعدة المحتاجين ⚖️'},
    en:{title:'Economic Moderation',desc:'Al-Ghazali explains: Islam does not side with savage capitalism that crushes the poor, nor with socialism that confiscates individual freedom. It is a middle system that preserves private ownership while requiring social responsibility. The rich must not be arrogant and the poor must not be deprived.',verse:'And thus We have made you a moderate nation',verseRef:'Al-Baqarah 143',hadith:'The best of affairs is the middle course — Good hadith',action:'Learn the difference between Islam and socialism on one topic today and discuss it with your family',young:'Islam says: Be fair! Do not take what belongs to others and never forget to help those in need ⚖️'},
    fr:{title:'La Moderation Economique',desc:"L\'Islam ne soutient ni le capitalisme sauvage qui ecrase les pauvres, ni le socialisme qui confisque la liberte individuelle. C'est un systeme du juste milieu qui preserve la propriete privee tout en exigeant la responsabilite sociale.",verse:'Et ainsi Nous avons fait de vous une communaute du juste milieu',verseRef:'Al-Baqarah 143',hadith:'Les meilleures affaires sont celles du juste milieu — Bon hadith',action:"Apprenez la difference entre l'Islam et le socialisme sur un sujet et discutez-en en famille",young:"L'Islam dit : Sois juste ! Ne prends pas le droit d'autrui et n'oublie pas d'aider les necessiteux ⚖️"}
  },
  {
    id:2, emoji:'🏠',
    ar:{title:'حق الملكية في الإسلام',desc:'يبيّن الغزالي: الإسلام يحترم حق الإنسان في التملك لأنه فطرة. الإنسان يعمل ويكدّ ليملك بيتاً وأرضاً ومالاً. لكن الملكية ليست مطلقة بل هي استخلاف من الله ومقيدة بعدم الضرر وأداء الحقوق.',verse:'وَآتُوهُمْ مِنْ مَالِ اللَّهِ الَّذِي آتَاكُمْ',verseRef:'النور ٣٣',hadith:'من أحيا أرضاً ميتة فهي له — رواه البخاري',action:'فكر في نعمة واحدة تملكها واشكر الله عليها ثم شاركها مع غيرك',young:'يمكنك أن تملك أشياءك الخاصة! لكن تذكر أن تشارك مع من يحتاج 🏠'},
    en:{title:'Property Rights in Islam',desc:'Al-Ghazali explains: Islam respects the human right to own property because it is part of human nature. A person works hard to own a home, land, and wealth. However, ownership is not absolute — it is a trust from God, restricted by the duty not to harm others and to fulfill rights.',verse:'And give them from the wealth of Allah which He has given you',verseRef:'An-Nur 33',hadith:'Whoever revives a barren land, it belongs to them — Bukhari',action:'Think of one blessing you own, thank Allah for it, then share something with someone else',young:'You can own your own things! But remember to share with those who need help 🏠'},
    fr:{title:"Le Droit de Propriete en Islam",desc:"L\'Islam respecte le droit de l'homme a posseder car c'est dans la nature humaine. Une personne travaille pour posseder une maison, une terre et des biens. Cependant, la propriete n'est pas absolue — c'est un depot de Dieu, limitee par le devoir de ne pas nuire et de remplir les droits.",verse:'Et donnez-leur des biens qu\'Allah vous a accordes',verseRef:'An-Nur 33',hadith:'Quiconque cultive une terre inculte, elle lui appartient — Bukhari',action:'Pensez a une benediction que vous possedez, remerciez Allah, puis partagez quelque chose',young:"Tu peux posseder tes propres affaires ! Mais souviens-toi de partager avec ceux dans le besoin 🏠"}
  },
  {
    id:3, emoji:'💰',
    ar:{title:'الزكاة مقابل الضريبة',desc:'يبيّن الغزالي: الزكاة ليست ضريبة يفرضها حاكم بل عبادة يؤديها المسلم طوعاً لله. نسبتها محددة (٢.٥٪) ومصارفها واضحة في القرآن. هي تطهير للمال والنفس معاً. أما الضريبة الاشتراكية فتصل أحياناً لـ٩٠٪ وتُنفق حسب أهواء الحكام.',verse:'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا',verseRef:'التوبة ١٠٣',hadith:'ما نقصت صدقة من مال — رواه مسلم',action:'احسب ٢.٥٪ من مصروفك الشهري وتصدق بها — جرب إحساس العطاء',young:'الزكاة مثل مشاركة جزء صغير من نقودك مع الفقراء — الله يحب الكرماء! 💰'},
    en:{title:'Zakat vs Socialist Tax',desc:'Al-Ghazali explains: Zakat is not a tax imposed by a ruler but an act of worship performed willingly for God. Its rate is fixed (2.5%) and its recipients are clearly defined in the Quran. It purifies both wealth and soul. Socialist taxes can reach 90% and are spent according to rulers\' whims.',verse:'Take from their wealth a charity, purifying and cleansing them with it',verseRef:'At-Tawbah 103',hadith:'Charity does not decrease wealth — Muslim',action:'Calculate 2.5% of your monthly pocket money and donate it — experience the joy of giving',young:'Zakat is like sharing a small part of your money with poor people — Allah loves generous people! 💰'},
    fr:{title:'La Zakat contre l\'Impot Socialiste',desc:"La Zakat n'est pas un impot impose par un dirigeant mais un acte d'adoration accompli volontairement pour Dieu. Son taux est fixe (2,5%) et ses beneficiaires sont clairement definis dans le Coran. Elle purifie a la fois la richesse et l'ame. Les impots socialistes peuvent atteindre 90%.",verse:'Prends de leurs biens une aumone qui les purifie et les benit',verseRef:'At-Tawbah 103',hadith:'La charite ne diminue pas la richesse — Muslim',action:"Calculez 2,5% de votre argent de poche mensuel et faites un don — experimentez la joie de donner",young:"La Zakat c'est comme partager une petite partie de ton argent avec les pauvres — Allah aime les genereux ! 💰"}
  },
  {
    id:4, emoji:'🏛️',
    ar:{title:'حدود دور الدولة',desc:'يبيّن الغزالي: الدولة في الإسلام ليست مالكة لكل شيء كما في الاشتراكية. دورها حماية الحقوق ومنع الظلم وتوفير الضروريات لمن لا يجد. الحاكم خادم للأمة لا سيد عليها. إذا ظلم الحاكم فالأمة تحاسبه.',verse:'إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا',verseRef:'النساء ٥٨',hadith:'كلكم راعٍ وكلكم مسؤول عن رعيته — متفق عليه',action:'اقرأ عن دور الدولة في الإسلام وقارنه بما تعرفه عن الأنظمة الأخرى',young:'الحاكم في الإسلام مثل رئيس الفريق — يساعد الجميع ولا يتسلط على أحد! 🏛️'},
    en:{title:'Limits of State Role',desc:'Al-Ghazali explains: The state in Islam does not own everything as in socialism. Its role is to protect rights, prevent injustice, and provide necessities for those who cannot find them. The ruler is a servant of the nation, not its master. If the ruler is unjust, the nation holds them accountable.',verse:'Indeed, Allah commands you to return trusts to their rightful owners',verseRef:'An-Nisa 58',hadith:'Each of you is a shepherd and responsible for their flock — Agreed upon',action:'Read about the role of the state in Islam and compare it with what you know about other systems',young:'A ruler in Islam is like a team captain — they help everyone and do not bully anyone! 🏛️'},
    fr:{title:"Les Limites du Role de l'Etat",desc:"L'Etat en Islam ne possede pas tout comme dans le socialisme. Son role est de proteger les droits, empecher l'injustice et fournir les necessites a ceux qui ne peuvent pas. Le dirigeant est un serviteur de la nation, pas son maitre.",verse:'Allah vous ordonne de restituer les depots a leurs ayants droit',verseRef:'An-Nisa 58',hadith:'Chacun de vous est un berger et responsable de son troupeau — Unanimement reconnu',action:"Lisez sur le role de l'Etat en Islam et comparez-le avec d'autres systemes que vous connaissez",young:"Un dirigeant en Islam est comme un capitaine d'equipe — il aide tout le monde et n'intimide personne ! 🏛️"}
  },
  {
    id:5, emoji:'🤝',
    ar:{title:'التكافل الاجتماعي',desc:'يبيّن الغزالي: التكافل في الإسلام ليس إحساناً بل واجب. المجتمع المسلم كالجسد الواحد إذا اشتكى منه عضو تداعى له سائر الجسد. الفقير له حق معلوم في مال الغني. ليس منّةً من أحد بل حكم الله.',verse:'وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَعْلُومٌ لِلسَّائِلِ وَالْمَحْرُومِ',verseRef:'المعارج ٢٤-٢٥',hadith:'مثل المؤمنين في توادهم كمثل الجسد الواحد — متفق عليه',action:'ساعد شخصاً محتاجاً اليوم بأي شكل: طعام أو كلمة طيبة أو مال',young:'المسلمون مثل فريق واحد — إذا أحد منهم محتاج الكل يساعده! 🤝'},
    en:{title:'Social Solidarity',desc:'Al-Ghazali explains: Solidarity in Islam is not charity but a duty. The Muslim community is like one body — if one part hurts, the whole body responds. The poor have a known right in the wealth of the rich. It is not a favor but God\'s command.',verse:'And those in whose wealth there is a known right for the beggar and the deprived',verseRef:'Al-Maarij 24-25',hadith:'The example of believers in their mutual love is like one body — Agreed upon',action:'Help someone in need today in any way: food, a kind word, or money',young:'Muslims are like one team — if someone is in need, everyone helps them! 🤝'},
    fr:{title:'La Solidarite Sociale',desc:"La solidarite en Islam n'est pas de la charite mais un devoir. La communaute musulmane est comme un seul corps — si une partie souffre, tout le corps reagit. Les pauvres ont un droit reconnu dans la richesse des riches. Ce n'est pas une faveur mais un ordre de Dieu.",verse:'Et ceux dans les biens desquels il y a un droit reconnu pour le mendiant et le demuni',verseRef:'Al-Maarij 24-25',hadith:'Les croyants dans leur amour mutuel sont comme un seul corps — Unanimement reconnu',action:"Aidez quelqu'un dans le besoin aujourd'hui : nourriture, parole gentille ou argent",young:"Les musulmans sont comme une seule equipe — si quelqu'un a besoin, tout le monde l'aide ! 🤝"}
  },
  {
    id:6, emoji:'📊',
    ar:{title:'توزيع الثروة',desc:'يبيّن الغزالي: الإسلام يرفض أن تكون الثروة حكراً على فئة قليلة. المال يجب أن يتداول بين الناس جميعاً. الزكاة والصدقات والوقف والميراث كلها وسائل لمنع تكدس المال عند الأغنياء فقط.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنْكُمْ',verseRef:'الحشر ٧',hadith:'ما آمن بي من بات شبعاناً وجاره جائع — رواه البزار',action:'فكر في طريقة لتوزيع خير ما عندك — علم أو مال أو وقت — على من حولك',young:'المال مثل الماء — لازم يتحرك ويوصل للجميع حتى ينفع! 📊'},
    en:{title:'Wealth Distribution',desc:'Al-Ghazali explains: Islam rejects the concentration of wealth in the hands of a few. Money must circulate among all people. Zakat, charity, endowments, and inheritance are all means to prevent wealth from piling up only with the rich.',verse:'So that it does not circulate only among the rich among you',verseRef:'Al-Hashr 7',hadith:'He does not believe in me who sleeps full while his neighbor is hungry — Al-Bazzar',action:'Think of a way to share your blessings — knowledge, money, or time — with those around you',young:'Money is like water — it needs to flow and reach everyone to be useful! 📊'},
    fr:{title:'La Distribution des Richesses',desc:"L'Islam rejette la concentration des richesses entre les mains de quelques-uns. L'argent doit circuler entre tous. La Zakat, la charite, les waqfs et l'heritage sont des moyens pour empecher l'accumulation de richesses chez les riches uniquement.",verse:'Afin que cela ne circule pas seulement parmi les riches d\'entre vous',verseRef:'Al-Hashr 7',hadith:'Il ne croit pas en moi celui qui dort rassasie alors que son voisin a faim — Al-Bazzar',action:"Pensez a une facon de partager vos benedictions — savoir, argent ou temps — avec votre entourage",young:"L'argent est comme l'eau — il doit circuler et atteindre tout le monde pour etre utile ! 📊"}
  },
  {
    id:7, emoji:'🚫',
    ar:{title:'تحريم الربا',desc:'الربا (الفائدة) محرمة في الإسلام لأنها تجعل المال ينمو دون عمل حقيقي وتثقل كاهل الفقراء بالديون. المرابي يستغل حاجة الناس. الإسلام يشجع التجارة الحقيقية والمشاركة في الربح والخسارة.',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'البقرة ٢٧٥',hadith:'لعن رسول الله ﷺ آكل الربا ومؤكله وكاتبه وشاهديه — رواه مسلم',action:'تعلم عن البنوك الإسلامية وكيف تعمل بدون ربا — اسأل والديك',young:'الربا يعني أن تأخذ فلوس زيادة ممن يحتاج — وهذا ظلم! الإسلام يقول: لا! 🚫'},
    en:{title:'Prohibition of Riba',desc:'Riba (interest) is forbidden in Islam because it makes money grow without real work and burdens the poor with debts. The usurer exploits people\'s needs. Islam encourages real trade and sharing in profit and loss.',verse:'Allah has permitted trade and forbidden riba',verseRef:'Al-Baqarah 275',hadith:'The Messenger of Allah cursed the one who consumes riba, the one who pays it, the one who records it, and the two witnesses — Muslim',action:'Learn about Islamic banks and how they work without interest — ask your parents',young:'Riba means taking extra money from someone who is in need — that is unfair! Islam says: No! 🚫'},
    fr:{title:"L'Interdiction du Riba",desc:"Le Riba (l'interet) est interdit en Islam car il fait croitre l'argent sans travail reel et accable les pauvres de dettes. L'usurier exploite les besoins des gens. L'Islam encourage le vrai commerce et le partage des profits et pertes.",verse:'Allah a permis le commerce et interdit le riba',verseRef:'Al-Baqarah 275',hadith:"Le Messager d'Allah a maudit celui qui consomme le riba, celui qui le paie, celui qui l'enregistre et les deux temoins — Muslim",action:"Decouvrez les banques islamiques et comment elles fonctionnent sans interet — demandez a vos parents",young:"Le Riba c'est prendre de l'argent en plus de quelqu'un dans le besoin — c'est injuste ! L'Islam dit : Non ! 🚫"}
  },
  {
    id:8, emoji:'🕌',
    ar:{title:'نظام الوقف',desc:'الوقف اختراع إسلامي عظيم — تُحبس الأصل وتُنفق ثمرته في الخير إلى الأبد. بنى المسلمون بالأوقاف المدارس والمستشفيات والمكتبات والأسبلة. نظام يجعل الصدقة مستمرة حتى بعد الموت.',verse:'لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا مِمَّا تُحِبُّونَ',verseRef:'آل عمران ٩٢',hadith:'إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية أو علم يُنتفع به أو ولد صالح يدعو له — رواه مسلم',action:'فكر في مشروع وقفي صغير يمكنك المساهمة فيه — حتى لو كان شراء كتاب للمسجد',young:'الوقف يعني أنك تبني شيئاً مفيداً للناس يبقى حتى بعد ما تكبر! 🕌'},
    en:{title:'The Waqf System',desc:'Waqf is a great Islamic invention — the asset is preserved and its returns are spent on good causes forever. Muslims built schools, hospitals, libraries, and fountains through waqf. A system that makes charity continuous even after death.',verse:'You will not attain righteousness until you spend from what you love',verseRef:'Al Imran 92',hadith:'When a person dies, their deeds end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for them — Muslim',action:'Think of a small waqf project you can contribute to — even buying a book for the mosque',young:'Waqf means you build something useful for people that stays even after you grow up! 🕌'},
    fr:{title:'Le Systeme du Waqf',desc:"Le Waqf est une grande invention islamique — l'actif est preserve et ses revenus sont depenses pour de bonnes causes a perpetuite. Les musulmans ont construit des ecoles, hopitaux, bibliotheques et fontaines par le waqf. Un systeme qui rend la charite continue meme apres la mort.",verse:'Vous n\'atteindrez la piete que lorsque vous depenserez de ce que vous aimez',verseRef:'Al Imran 92',hadith:"Quand une personne meurt, ses actes cessent sauf trois : charite continue, savoir benefique ou enfant pieux qui prie pour elle — Muslim",action:"Pensez a un petit projet waqf auquel vous pouvez contribuer — meme acheter un livre pour la mosquee",young:"Le Waqf c'est construire quelque chose d'utile pour les gens qui reste meme apres avoir grandi ! 🕌"}
  },
  {
    id:9, emoji:'👷',
    ar:{title:'كرامة العامل',desc:'العامل في الإسلام له كرامة لا تُنتقص. أجره يُدفع قبل أن يجف عرقه. ظلم العامل من أكبر الذنوب. ليس العامل عبداً للمالك بل هو شريك في البناء ومحترم في عمله.',verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ',verseRef:'التوبة ١٠٥',hadith:'أعطوا الأجير أجره قبل أن يجف عرقه — رواه ابن ماجه',action:'اشكر عاملاً قابلته اليوم — عامل النظافة أو البائع أو السائق — بكلمة طيبة',young:'كل عامل يستحق الاحترام! قل شكراً لكل من يساعدك 👷'},
    en:{title:'Worker Dignity',desc:'A worker in Islam has dignity that cannot be diminished. Their wages must be paid before their sweat dries. Oppressing workers is among the greatest sins. A worker is not a slave to the owner but a partner in building, respected in their work.',verse:'And say: Work! Allah will see your work, as will His Messenger and the believers',verseRef:'At-Tawbah 105',hadith:'Give the worker their wages before their sweat dries — Ibn Majah',action:'Thank a worker you meet today — a cleaner, a shopkeeper, or a driver — with a kind word',young:'Every worker deserves respect! Say thank you to everyone who helps you 👷'},
    fr:{title:'La Dignite du Travailleur',desc:"Le travailleur en Islam a une dignite inalterable. Son salaire doit etre paye avant que sa sueur ne seche. Opprimer les travailleurs est parmi les plus grands peches. Un travailleur n'est pas un esclave mais un partenaire dans la construction.",verse:'Et dis : Travaillez ! Allah verra votre travail, ainsi que Son Messager et les croyants',verseRef:'At-Tawbah 105',hadith:'Donnez au travailleur son salaire avant que sa sueur ne seche — Ibn Majah',action:"Remerciez un travailleur que vous rencontrez aujourd'hui — un nettoyeur, un vendeur ou un chauffeur",young:"Chaque travailleur merite le respect ! Dis merci a tous ceux qui t'aident 👷"}
  },
  {
    id:10, emoji:'🌾',
    ar:{title:'ملكية الأرض',desc:'الأرض في الإسلام لمن يحييها ويعمل فيها لا لمن يكنزها ويتركها بوراً. إهمال الأرض يسقط حق ملكيتها. هذا يمنع الإقطاع ويحفز الإنتاج ويوفر الطعام للجميع.',verse:'هُوَ أَنْشَأَكُمْ مِنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا',verseRef:'هود ٦١',hadith:'من أحيا أرضاً ميتة فهي له — رواه البخاري',action:'ازرع نبتة صغيرة اليوم — ولو في كوب — وتعلم كيف نستثمر الأرض',young:'الأرض مثل اللوحة البيضاء — من يزرعها ويعتني بها يستحقها! 🌾'},
    en:{title:'Land Ownership',desc:'In Islam, land belongs to those who cultivate and work it, not to those who hoard and leave it barren. Neglecting land forfeits the right to own it. This prevents feudalism, stimulates production, and provides food for all.',verse:'He produced you from the earth and settled you in it',verseRef:'Hud 61',hadith:'Whoever revives a barren land, it belongs to them — Bukhari',action:'Plant a small seedling today — even in a cup — and learn how we invest in the earth',young:'Land is like a blank canvas — whoever plants it and takes care of it deserves it! 🌾'},
    fr:{title:'La Propriete Fonciere',desc:"En Islam, la terre appartient a ceux qui la cultivent et y travaillent, pas a ceux qui la thesaurisent et la laissent en friche. Negliger la terre fait perdre le droit de propriete. Cela empeche la feodalite et stimule la production.",verse:'C\'est Lui qui vous a produits de la terre et vous y a etablis',verseRef:'Hud 61',hadith:'Quiconque cultive une terre inculte, elle lui appartient — Bukhari',action:"Plantez une petite graine aujourd'hui — meme dans un verre — et apprenez comment investir la terre",young:"La terre est comme une toile blanche — celui qui la plante et en prend soin la merite ! 🌾"}
  },
  {
    id:11, emoji:'🛒',
    ar:{title:'منع الاحتكار',desc:'الاحتكار حرام في الإسلام لأنه يرفع الأسعار ويضر الفقراء. من خزن طعاماً أو سلعة ليبيعها بسعر أعلى عند الحاجة فهو آثم. السوق الإسلامي يقوم على المنافسة العادلة والشفافية.',verse:'وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ',verseRef:'هود ٨٥',hadith:'لا يحتكر إلا خاطئ — رواه مسلم',action:'عندما تشتري شيئاً اليوم تأكد أن السعر عادل ولا تقبل الغش',young:'الاحتكار يعني أن تخبئ الأشياء لتبيعها غالية — وهذا ظلم! 🛒'},
    en:{title:'Monopoly Ban',desc:'Monopoly is forbidden in Islam because it raises prices and harms the poor. Whoever hoards food or goods to sell at a higher price during times of need is sinful. The Islamic market is based on fair competition and transparency.',verse:'And do not deprive people of their goods and do not cause corruption on earth',verseRef:'Hud 85',hadith:'Only a sinner hoards — Muslim',action:'When you buy something today, make sure the price is fair and do not accept fraud',young:'Monopoly means hiding things to sell them at a higher price — that is unfair! 🛒'},
    fr:{title:'L\'Interdiction du Monopole',desc:"Le monopole est interdit en Islam car il augmente les prix et nuit aux pauvres. Quiconque stocke de la nourriture ou des marchandises pour les vendre a un prix plus eleve en temps de besoin est pecheur. Le marche islamique repose sur la concurrence loyale et la transparence.",verse:'Ne lesez pas les gens dans leurs biens et ne semez pas la corruption sur terre',verseRef:'Hud 85',hadith:'Seul un pecheur pratique la retention — Muslim',action:"Quand vous achetez quelque chose aujourd'hui, assurez-vous que le prix est juste",young:"Le monopole c'est cacher des choses pour les vendre plus cher — c'est injuste ! 🛒"}
  },
  {
    id:12, emoji:'📜',
    ar:{title:'عدالة الميراث',desc:'نظام الميراث في الإسلام يوزع المال تلقائياً بعد الوفاة على الأسرة كلها — الزوج والزوجة والأبناء والبنات والآباء. لا يجوز حرمان أي وارث من حقه. هذا يمنع تكدس المال في يد واحدة عبر الأجيال.',verse:'لِلرِّجَالِ نَصِيبٌ مِمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ',verseRef:'النساء ٧',hadith:'إن الله قد أعطى كل ذي حق حقه فلا وصية لوارث — رواه أبو داود',action:'اسأل والديك عن نظام الميراث في الإسلام وكيف يوزع العدل',young:'عندما يترك شخص مالاً الإسلام يقسمه بالعدل بين العائلة كلها! 📜'},
    en:{title:'Inheritance Justice',desc:'The inheritance system in Islam automatically distributes wealth after death to the whole family — spouse, sons, daughters, and parents. No heir may be deprived of their right. This prevents the accumulation of wealth in one hand across generations.',verse:'For men there is a share from what the parents and relatives leave',verseRef:'An-Nisa 7',hadith:'Allah has given every rightful person their right, so there is no bequest for an heir — Abu Dawud',action:'Ask your parents about the inheritance system in Islam and how justice is distributed',young:'When someone leaves behind money, Islam divides it fairly among the whole family! 📜'},
    fr:{title:"La Justice de l'Heritage",desc:"Le systeme d'heritage en Islam distribue automatiquement la richesse apres le deces a toute la famille — conjoint, fils, filles et parents. Aucun heritier ne peut etre prive de son droit. Cela empeche l'accumulation de richesse dans une seule main a travers les generations.",verse:'Aux hommes revient une part de ce qu\'ont laisse les parents et les proches',verseRef:'An-Nisa 7',hadith:"Allah a donne a chaque ayant droit son droit, il n'y a pas de testament pour un heritier — Abu Dawud",action:"Demandez a vos parents le systeme d'heritage en Islam et comment la justice est distribuee",young:"Quand quelqu'un laisse de l'argent, l'Islam le repartit equitablement entre toute la famille ! 📜"}
  },
  {
    id:13, emoji:'🛍️',
    ar:{title:'حرية التجارة',desc:'الإسلام يضمن حرية التجارة والبيع والشراء. لا يجوز للدولة أن تحتكر التجارة أو تصادر أموال التجار. لكن هذه الحرية مقيدة بالأمانة وعدم الغش وعدم بيع المحرمات.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ إِلَّا أَنْ تَكُونَ تِجَارَةً عَنْ تَرَاضٍ',verseRef:'النساء ٢٩',hadith:'التاجر الصدوق الأمين مع النبيين والصديقين والشهداء — رواه الترمذي',action:'إذا اشتريت أو بعت شيئاً اليوم كن صادقاً وأميناً تماماً',young:'التجارة في الإسلام تعني البيع والشراء بأمانة — لا غش ولا كذب! 🛍️'},
    en:{title:'Trade Freedom',desc:'Islam guarantees freedom of trade — buying and selling. The state may not monopolize trade or confiscate merchants\' money. But this freedom is restricted by honesty, no fraud, and no selling of forbidden goods.',verse:'O you who believe, do not consume each other\'s wealth unjustly, but only through mutually agreed trade',verseRef:'An-Nisa 29',hadith:'The honest and trustworthy merchant is with the prophets, the truthful, and the martyrs — Tirmidhi',action:'If you buy or sell something today, be completely honest and trustworthy',young:'Trade in Islam means buying and selling honestly — no cheating and no lying! 🛍️'},
    fr:{title:'La Liberte du Commerce',desc:"L\'Islam garantit la liberte du commerce — achat et vente. L'Etat ne peut pas monopoliser le commerce ni confisquer l'argent des commercants. Mais cette liberte est limitee par l'honnetete, l'absence de fraude et l'interdiction de vendre des produits illicites.",verse:'O vous qui croyez, ne mangez pas vos biens entre vous de maniere illicite, sauf par un commerce de consentement mutuel',verseRef:'An-Nisa 29',hadith:'Le commercant honnete et digne de confiance est avec les prophetes, les veridiques et les martyrs — Tirmidhi',action:"Si vous achetez ou vendez quelque chose aujourd'hui, soyez completement honnete et digne de confiance",young:"Le commerce en Islam signifie acheter et vendre honnetement — pas de triche ni de mensonge ! 🛍️"}
  },
  {
    id:14, emoji:'🌍',
    ar:{title:'حرية اقتصادية بأخلاق',desc:'الحرية الاقتصادية في الإسلام ليست فوضى. يمكنك أن تكسب وتتملك وتستثمر لكن ضمن ضوابط أخلاقية: لا غش ولا ربا ولا احتكار ولا ضرر. الأخلاق هي الحارس الأمين على الاقتصاد.',verse:'وَلَا تَنْسَ نَصِيبَكَ مِنَ الدُّنْيَا وَأَحْسِنْ كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ',verseRef:'القصص ٧٧',hadith:'إن الله طيب لا يقبل إلا طيباً — رواه مسلم',action:'راقب تصرفاتك المالية اليوم — هل كل تعاملاتك نظيفة وأخلاقية؟',young:'اكسب فلوسك بطريقة نظيفة — بدون غش وبدون أذية أحد! 🌍'},
    en:{title:'Economic Freedom with Ethics',desc:'Economic freedom in Islam is not chaos. You can earn, own, and invest but within ethical guidelines: no fraud, no interest, no monopoly, no harm. Ethics are the faithful guardian of the economy.',verse:'And do not forget your share of the world, and do good as Allah has done good to you',verseRef:'Al-Qasas 77',hadith:'Allah is pure and only accepts what is pure — Muslim',action:'Watch your financial behavior today — are all your dealings clean and ethical?',young:'Earn your money in a clean way — no cheating and without hurting anyone! 🌍'},
    fr:{title:'Liberte Economique avec Ethique',desc:"La liberte economique en Islam n'est pas le chaos. Vous pouvez gagner, posseder et investir mais dans des limites ethiques : pas de fraude, pas d'interet, pas de monopole, pas de prejudice. L'ethique est la gardienne fidele de l'economie.",verse:"Et n'oublie pas ta part de ce monde, et fais le bien comme Allah t'a fait du bien",verseRef:'Al-Qasas 77',hadith:"Allah est pur et n'accepte que ce qui est pur — Muslim",action:"Surveillez votre comportement financier aujourd'hui — vos transactions sont-elles propres et ethiques ?",young:"Gagne ton argent de maniere propre — sans tricher et sans blesser personne ! 🌍"}
  },
  {
    id:15, emoji:'🌟',
    ar:{title:'نظام شامل متكامل',desc:'الإسلام ليس نظاماً اقتصادياً فقط بل نظام حياة شامل. الاقتصاد فيه مرتبط بالعقيدة والأخلاق والعبادة والمعاملات. لا يمكن فصل الاقتصاد عن الإيمان. هذا ما يميز الإسلام عن كل النظريات البشرية.',verse:'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي',verseRef:'المائدة ٣',hadith:'إن هذا الدين يسر ولن يشاد الدين أحد إلا غلبه — رواه البخاري',action:'اربط كل تصرف اقتصادي بنيّة صالحة اليوم — اجعل عملك عبادة',young:'الإسلام نظام كامل لحياة سعيدة — يعلمنا كيف نعمل وكيف نعيش بأمان! 🌟'},
    en:{title:'A Comprehensive System',desc:'Islam is not just an economic system but a complete way of life. Economics in it is connected to faith, ethics, worship, and dealings. The economy cannot be separated from belief. This is what distinguishes Islam from all human-made theories.',verse:'Today I have perfected your religion for you and completed My favor upon you',verseRef:'Al-Maidah 3',hadith:'This religion is easy, and no one overburdens themselves in religion except that it overwhelms them — Bukhari',action:'Link every economic action to a good intention today — make your work an act of worship',young:'Islam is a complete system for a happy life — it teaches us how to work and live safely! 🌟'},
    fr:{title:'Un Systeme Complet',desc:"L'Islam n'est pas seulement un systeme economique mais un mode de vie complet. L'economie y est liee a la foi, l'ethique, le culte et les transactions. L'economie ne peut etre separee de la croyance. C'est ce qui distingue l'Islam de toutes les theories humaines.",verse:"Aujourd'hui J'ai parfait votre religion et complete Mon bienfait sur vous",verseRef:'Al-Maidah 3',hadith:'Cette religion est facile, et personne ne se surcharge dans la religion sans qu\'elle ne le submerge — Bukhari',action:"Liez chaque action economique a une bonne intention aujourd'hui — faites de votre travail un acte d'adoration",young:"L'Islam est un systeme complet pour une vie heureuse — il nous apprend comment travailler et vivre en securite ! 🌟"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما النسبة المحددة للزكاة في الإسلام؟',opts:['١٪','٢.٥٪','٥٪','١٠٪'],correct:1,hint:'نسبة صغيرة وثابتة على المال الذي مر عليه عام',quran:'التوبة ١٠٣'},
    en:{q:'What is the fixed rate of Zakat in Islam?',opts:['1%','2.5%','5%','10%'],correct:1,hint:'A small and fixed percentage on wealth held for one year',quran:'At-Tawbah 103'},
    fr:{q:'Quel est le taux fixe de la Zakat en Islam ?',opts:['1%','2,5%','5%','10%'],correct:1,hint:'Un petit pourcentage fixe sur la richesse detenue pendant un an',quran:'At-Tawbah 103'}
  },
  {
    ar:{q:'ماذا يعني مصطلح "الوقف" في الإسلام؟',opts:['ضريبة على الأرض','صدقة جارية تُحبس أصلها وتُنفق ثمرتها','قرض بدون فائدة','ميراث للأبناء'],correct:1,hint:'نظام يجعل الخير مستمراً إلى الأبد',quran:'آل عمران ٩٢'},
    en:{q:'What does "Waqf" mean in Islam?',opts:['Land tax','Ongoing charity where the asset is preserved and returns are spent','Interest-free loan','Inheritance for children'],correct:1,hint:'A system that makes good deeds continue forever',quran:'Al Imran 92'},
    fr:{q:'Que signifie "Waqf" en Islam ?',opts:['Impot foncier','Charite continue ou l\'actif est preserve et les revenus sont depenses','Pret sans interet','Heritage pour les enfants'],correct:1,hint:'Un systeme qui fait durer les bonnes actions pour toujours',quran:'Al Imran 92'}
  },
  {
    ar:{q:'أكمل الآية: "وَأَحَلَّ اللَّهُ ... وَحَرَّمَ الرِّبَا"',opts:['الصدقة','الزكاة','البيع','الوقف'],correct:2,hint:'تتعلق بالتجارة والمعاملات المالية',quran:'البقرة ٢٧٥'},
    en:{q:'Complete the verse: "Allah has permitted ... and forbidden riba"',opts:['Charity','Zakat','Trade','Waqf'],correct:2,hint:'Related to commerce and financial transactions',quran:'Al-Baqarah 275'},
    fr:{q:'Completez le verset : "Allah a permis ... et interdit le riba"',opts:['La charite','La Zakat','Le commerce','Le Waqf'],correct:2,hint:'Lie au commerce et aux transactions financieres',quran:'Al-Baqarah 275'}
  },
  {
    ar:{q:'ما حكم الاحتكار في الإسلام؟',opts:['مكروه','مباح','حرام','مستحب'],correct:2,hint:'قال النبي ﷺ: "لا يحتكر إلا خاطئ"',quran:'هود ٨٥'},
    en:{q:'What is the ruling on monopoly in Islam?',opts:['Disliked','Permissible','Forbidden','Recommended'],correct:2,hint:'The Prophet (PBUH) said: "Only a sinner hoards"',quran:'Hud 85'},
    fr:{q:'Quel est le jugement sur le monopole en Islam ?',opts:['Deconseille','Permis','Interdit','Recommande'],correct:2,hint:'Le Prophete (PSL) a dit : "Seul un pecheur pratique la retention"',quran:'Hud 85'}
  },
  {
    ar:{q:'أكمل الحديث: "أعطوا الأجير أجره قبل أن يجف ..."',opts:['دمه','عرقه','لسانه','حبره'],correct:1,hint:'يتعلق بحق العامل في الأجر الفوري',quran:'التوبة ١٠٥'},
    en:{q:'Complete the hadith: "Give the worker their wages before their ... dries"',opts:['Blood','Sweat','Tongue','Ink'],correct:1,hint:'Related to the worker\'s right to immediate payment',quran:'At-Tawbah 105'},
    fr:{q:'Completez le hadith : "Donnez au travailleur son salaire avant que ... ne seche"',opts:['Son sang','Sa sueur','Sa langue','Son encre'],correct:1,hint:'Lie au droit du travailleur au paiement immediat',quran:'At-Tawbah 105'}
  },
  {
    ar:{q:'في أي سورة وردت آية "كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنْكُمْ"؟',opts:['البقرة','النساء','الحشر','الأنفال'],correct:2,hint:'سورة تتحدث عن أحداث بني النضير',quran:'الحشر ٧'},
    en:{q:'In which surah is the verse "So that it does not circulate only among the rich"?',opts:['Al-Baqarah','An-Nisa','Al-Hashr','Al-Anfal'],correct:2,hint:'A surah that discusses events of Banu Nadir',quran:'Al-Hashr 7'},
    fr:{q:'Dans quelle sourate se trouve le verset "Afin que cela ne circule pas parmi les riches" ?',opts:['Al-Baqarah','An-Nisa','Al-Hashr','Al-Anfal'],correct:2,hint:'Une sourate qui parle des evenements de Banu Nadir',quran:'Al-Hashr 7'}
  },
  {
    ar:{q:'ما معنى "وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا"؟',opts:['أمة متوسطة العدد','أمة في وسط الأرض','أمة عادلة معتدلة','أمة قديمة'],correct:2,hint:'الوسطية تعني العدل والاعتدال',quran:'البقرة ١٤٣'},
    en:{q:'What does "And thus We have made you a moderate nation" mean?',opts:['A medium-sized nation','A nation in the middle of earth','A just and balanced nation','An ancient nation'],correct:2,hint:'Moderation means justice and balance',quran:'Al-Baqarah 143'},
    fr:{q:'Que signifie "Et ainsi Nous avons fait de vous une communaute du juste milieu" ?',opts:['Une nation de taille moyenne','Une nation au centre de la terre','Une nation juste et equilibree','Une nation ancienne'],correct:2,hint:'La moderation signifie justice et equilibre',quran:'Al-Baqarah 143'}
  },
  {
    ar:{q:'ما الفرق الأساسي بين الزكاة والضريبة الاشتراكية؟',opts:['الزكاة أعلى نسبة','الزكاة عبادة والضريبة إلزام بشري','لا فرق بينهما','الضريبة أقل نسبة'],correct:1,hint:'الزكاة تجمع بين البعد الروحي والمادي',quran:'التوبة ١٠٣'},
    en:{q:'What is the main difference between Zakat and socialist tax?',opts:['Zakat has a higher rate','Zakat is worship and tax is a human obligation','No difference','Tax has a lower rate'],correct:1,hint:'Zakat combines the spiritual and material dimensions',quran:'At-Tawbah 103'},
    fr:{q:'Quelle est la difference principale entre la Zakat et l\'impot socialiste ?',opts:['La Zakat a un taux plus eleve','La Zakat est une adoration et l\'impot est une obligation humaine','Aucune difference','L\'impot a un taux plus bas'],correct:1,hint:'La Zakat combine les dimensions spirituelle et materielle',quran:'At-Tawbah 103'}
  },
  {
    ar:{q:'من أحيا أرضاً ميتة فهي له — ما معنى هذا الحديث؟',opts:['الأرض للدولة دائماً','الأرض لمن يعمل فيها ويزرعها','الأرض للأغنياء فقط','الأرض لا تُملك'],correct:1,hint:'يشجع على العمل والإنتاج',quran:'هود ٦١'},
    en:{q:'"Whoever revives barren land, it belongs to them" — what does this hadith mean?',opts:['Land always belongs to the state','Land belongs to those who cultivate it','Land is only for the rich','Land cannot be owned'],correct:1,hint:'It encourages work and production',quran:'Hud 61'},
    fr:{q:'"Quiconque cultive une terre inculte, elle lui appartient" — que signifie ce hadith ?',opts:['La terre appartient toujours a l\'Etat','La terre appartient a ceux qui la cultivent','La terre est seulement pour les riches','La terre ne peut pas etre possedee'],correct:1,hint:'Il encourage le travail et la production',quran:'Hud 61'}
  },
  {
    ar:{q:'ماذا قال النبي ﷺ عن التاجر الصدوق الأمين؟',opts:['سيكون غنياً','مع النبيين والصديقين والشهداء','سيدخل الجنة أولاً','لا حساب عليه'],correct:1,hint:'مكانة عالية جداً يوم القيامة',quran:'النساء ٢٩'},
    en:{q:'What did the Prophet (PBUH) say about the honest and trustworthy merchant?',opts:['They will be rich','With the prophets, the truthful, and the martyrs','They will enter Paradise first','No accounting for them'],correct:1,hint:'A very high status on the Day of Judgment',quran:'An-Nisa 29'},
    fr:{q:'Qu\'a dit le Prophete (PSL) sur le commercant honnete et digne de confiance ?',opts:['Il sera riche','Avec les prophetes, les veridiques et les martyrs','Il entrera au Paradis en premier','Pas de comptes pour lui'],correct:1,hint:'Un statut tres eleve au Jour du Jugement',quran:'An-Nisa 29'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء البركة في الرزق',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'رواه ابن ماجه'},
    en:{label:'Dua for Blessed Provision',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds — Ibn Majah'},
    fr:{label:'Dua pour la Subsistance Benie',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, je Te demande un savoir utile, une bonne subsistance et des actes agrees — Ibn Majah'} },
  { ar:{label:'دعاء الكفاية',text:'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',tr:'رواه الترمذي'},
    en:{label:'Dua for Sufficiency',text:'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',tr:'O Allah, suffice me with what is lawful instead of what is forbidden, and enrich me by Your grace — Tirmidhi'},
    fr:{label:'Dua pour la Suffisance',text:'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',tr:'O Allah, suffis-moi avec ce qui est licite au lieu de l\'illicite, et enrichis-moi par Ta grace — Tirmidhi'} },
  { ar:{label:'دعاء قضاء الدين',text:'اللَّهُمَّ اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الفَقْرِ',tr:'دعاء مأثور'},
    en:{label:'Dua for Debt Relief',text:'اللَّهُمَّ اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الفَقْرِ',tr:'O Allah, relieve us from debt and enrich us from poverty — Reported dua'},
    fr:{label:'Dua pour le Remboursement de la Dette',text:'اللَّهُمَّ اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الفَقْرِ',tr:'O Allah, acquitte-nous de nos dettes et enrichis-nous de la pauvrete — Dua rapportee'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء الخير',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'البقرة ٢٠١'},
    en:{label:'Dua for Good',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'Our Lord, give us good in this world and good in the Hereafter and protect us from the Fire — Al-Baqarah 201'},
    fr:{label:'Dua pour le Bien',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'Notre Seigneur, donne-nous du bien ici-bas et dans l\'Au-dela et protege-nous du Feu — Al-Baqarah 201'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor bestowed upon me — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'manahij-xp';
const BADGES_KEY = 'manahij-badges';
const READ_KEY = 'manahij-read';
const STREAK_KEY = 'manahij-streak';
const MODE_KEY = 'manahij-mode';
const QUIZ_BEST_KEY = 'manahij-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) {
  const read = getReadCards();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«الإسلام والمناهج الاشتراكية» كتاب يبيّن فيه الشيخ الغزالي أن الإسلام نظام وسط لا يظلم الفرد كالرأسمالية ولا يصادر حريته كالاشتراكية. يكشف كيف سبق الإسلام كل النظريات البشرية في تحقيق العدالة الاجتماعية والتوازن الاقتصادي.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الإسلام والمناهج الاشتراكية" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وابن ماجه'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal and fighting rigidity.',
      bookTitle: 'About the Book',
      bookDesc: '"Islam and Socialist Systems" is a book where Sheikh al-Ghazali demonstrates that Islam is a middle system that neither oppresses the individual like capitalism nor confiscates their freedom like socialism. It reveals how Islam preceded all human theories in achieving social justice and economic balance.',
      sourcesTitle: 'Sources',
      sources: ['"Islam and Socialist Systems" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Ibn Majah'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"L\'Islam et les Systemes Socialistes" est un livre ou le Sheikh al-Ghazali demontre que l\'Islam est un systeme du juste milieu qui n\'opprime pas l\'individu comme le capitalisme et ne confisque pas sa liberte comme le socialisme.',
      sourcesTitle: 'Sources',
      sources: ['"L\'Islam et les Systemes Socialistes" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Ibn Majah'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الإسلام والمناهج الاشتراكية" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Islam and Socialist Systems" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"L\'Islam et les Systemes Socialistes" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالبركة','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'],
    en: ['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for blessings','⭐ Complete all 15 cards to become an Expert'],
    fr: ['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour la benediction','⭐ Completez les 15 cartes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
