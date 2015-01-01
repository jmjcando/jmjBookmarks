
angular.module('BookmarkApp')
    .service('BookmarkDataService', function () {

        return [{
            "title": "FAV-1",
            bkmrks: [
                { title: "Gmail", url: "https://gmail.com" },
                { title: "Gmail contacts", url: "https://mail.google.com/mail/#contacts" },
                { title: "Y!ahoo", url: "http://mail.yahoo.com/" },
                { title: "hotmail", url: "http://www.hotmail.com/" },
                { title: "sneakemail", url: "https://sneakemail.com/" },
                { title: "Facebook", url: "http://www.facebook.com" },
                { title: "LinkedIn", url: "http://www.linkedin.com/" },
                { type: 'separator' }, {
                    title: "logouts-all"
                    , type: 'multi-urls', urls:
                        [
                            "http://mail.google.com/mail/?logout"
                            , "http://login.yahoo.com/config/login?logout"
                            , "http://mail.live.com/mail/logout.aspx"
                            , "https://sneakemail.com/public/logout"
                            , "facebook.com"
                            , "linkedin.com"
                        ]
                },
                //{ title: "logout: Gmail", url: "http://mail.google.com/mail/?logout" },
                //{ title: "logout: Y!ahoo", url: "http://login.yahoo.com/config/login?logout" },
                //{ title: "logout: hotmail", url: "http://mail.live.com/mail/logout.aspx" },
                //{ title: "logout: Sneakemail", url: "https://sneakemail.com/public/logout" },
                //{ title: "logout: ", url: "" },
            ]}, {
                title: "FAV-2",
                bkmrks: [
                    { title: "google", url: "http://www.google.com" },
                    { title: "Google Maps", url: "http://maps.google.com" },
                    { title: "googleDoc tmp_clpbrd", url: "https://docs.google.com/Doc?id=d9sx6tm_11dr82cdg4" },
                    { title: "Gold Spot CNCB", url: "http://data.cnbc.com/quotes/XAU%3D" },
                    { title: "Gold Spot Bloomberg", url: "http://www.bloomberg.com/quote/XAUUSD:CUR" },
                    { title: "USD INR Bloomberg", url: "http://www.bloomberg.com/quote/USDINR:CUR" },
                ]}, {
                    title: "News-India",
                    bkmrks: [
                        { title: "divya bhaskar - navalkatha", url: "http://www.divyabhaskar.co.in/literature/navalkatha/" },
                        { title: "divya bhaskar - navlika", url: "http://www.divyabhaskar.co.in/literature/navlika/" },
                        { title: "ReadGujarati", url: "http://www.readgujarati.com" },
                        { type: 'separator' },
                        { title: "rediff", url: "http://www.rediff.com/index.html" },
                        { title: "times of india", url: "http://timesofindia.indiatimes.com/" },
                        { title: "economic times", url: "http://economictimes.indiatimes.com/" },
                        { title: "firstpost", url: "firstpost.com" },
                    ]
                }, {
                    title: "News-USA",
                    bkmrks: [
                        { title: "weather-google", url: "http://www.google.com/search?q=weather+08854" },
                        { title: "accuW-Today", url: "http://www.accuweather.com/us/nj/piscataway/08854/city-weather-forecast.asp" },
                        { title: "accuW-5 day", url: "http://www.accuweather.com/us/nj/piscataway/08854/forecast.asp" },
                        { title: "weather-bing", url: "http://www.bing.com/weather/search?q=weather" },
                        { type: 'separator' },
                        { title: 'huffpost', url: "huffingtonpost.com" },
                        { title: "mycentraljersey", url: "mycentraljersey.com" },
                        { title: "NJ.com", url: "www.nj.com/news/" },
                        { title: "New York Times", url: "http://nytimes.com/" },
                        { title: "Google News", url: "http://news.google.com" },
                    ]
                },
        {
            title: "AQ",
            bkmrks:
            [
                { title: "Google Docs", url: "https://spreadsheets.google.com/ccc?key=pM4e6yMY_eKSgBTtXI_UmTg&amp;hl=en" },
                { type: 'separator' },
                { title: "BoA", url: "http://www.bankofamerica.com" },
                { title: "Chase", url: "https://www.chase.com" },
                { type: 'separator' },
                { title: "TR psw", url: "https://troweprice.com/psw" },
                { title: "Vng small biz", url: "https://smallbiz.vanguard.com/" },
                { type: 'separator' },
                { title: "Eftps", url: "https://www.eftps.com" },
                { title: "Nj tax", url: "https://www1.state.nj.us/TYTR_BusinessFilings/jsp/common/Login.jsp?taxcode=45" },
            ]
        },
        {
            title: "PJ-1",
            bkmrks:
            [
                { title: "TD", url: "https://onlinebanking.tdbank.com/" },
                { title: "Genisys", url: "https://www.genisyscu.org/" },
                { type: 'separator' },
                { title: "Ally", url: "https://secure.ally.com/allyWebClient/login.do" },
                { title: "Amex", url: "http://personalsavings.americanexpress.com/?inav=footer_personal_savings" },
                { title: "CapitalOne 360", url: "https://secure.capitalone360.com/myaccount/banking/login.vm" },
                { title: "Discover", url: "https://www.discoverbank.com/bankac/loginreg/login" },
            ]
        },
        {
            title: "PJ-2",
            bkmrks:
            [
                { title: "BofA", url: "https://www.bankofamerica.com/" },
                { title: "Citi", url: "https://www.citibank.com/us/cards/index.jsp" },
                { type: 'separator' },
                { title: "fdlt", url: "https://fidelity.com" },
                { title: "ms", url: "https://www.morganstanleyclientserv.com/" },
                { title: "TR", url: "https://troweprice.com" },
                { title: "vng", url: "https://www.vanguard.com" },
            ]
        },
        {
            title: "PJ - Utility",
            bkmrks:
            [
                { title: "At&T", url: "https://www.attwireless.com" },
                { title: "AllVoi", url: "https://account.allvoi.com" },
                { title: "Liberty mutual", url: "http://www.libertymutual.com" },
                { title: "Optimum Online", url: "http://www.optimum.com/account/" }
            ]
        },
        {
            title: "HomePage",
            bkmrks:
            [
                { title: "comuv Jayesh", url: "http://jayeshmj.comuv.com/jmj.htm" },
                { title: "comuv Mahesh", url: "http://jayeshmj.comuv.com" },
                { title: "000webhost login", url: "http://members.000webhost.com/login.php", note: "zh3d94snqj@snkmail.com then file manager" },
            ]
        },
        {
            title: "savings rates",
            bkmrks:
            [
                { title: "mymoneyblog: online savings comp", url: "http://www.mymoneyblog.com/online-savings-accounts-and-comparisons" },
                { title: "bankrate.com: MMA", url: "http://www.bankrate.com/brm/rate/mmmf_highratehome.asp?params=US,416&amp;product=33&amp;sort=2" },
                { title: "bankrate.com: CD", url: "http://www.bankrate.com/funnel/cd-investments/cd-investment-results.aspx?local=false&amp;tab=CD&amp;prods=15" },
                { title: "ibc Data - MMF comp", url: "http://www.ibcdata.com/mfs/toppers.htm" },
                { title: "Bankrate: MMF-NonTaxable", url: "http://www.bankrate.com/brm/rate/mmmf_nontax.asp?prodtype=invest" },
                { title: "Bankrate: MMF-Taxables", url: "http://www.bankrate.com/brm/rate/mmmf_tax.asp?prodtype=invest" },
                { type: 'separator' },
                {
                    title: "rates-all"
                    , type: 'multi-urls', urls:
                        [
                            "http://personalsavings.americanexpress.com/?inav=footer_personal_savings"
                            , "http://www.ally.com/bank/savings/"
                            , "https://www.discover.com/online-banking/compare-products.html"
                            , "https://home.capitalone360.com/rates"
                        ]
                },
            ]
        },
        {
            title: "Tech Util",
            bkmrks:
            [
                { title: "Video to mp3", url: "www.vidtomp3.com" },
                { title: "Large Files", url: "transferbigfiles.com" },
                { title: "Large Files", url: "FileXpressit.com" },
                { type: 'separator' },
                { title: "translate: google", url: "http://translate.google.com/" },
                { title: "transliterate: google", url: "http://www.google.com/transliterate" },
                { title: "transliterate: ReadGuj", url: "http://www.readgujarati.com/gujtyping.php" },
                { type: 'separator' },
                { url: "spammotel.com" },
                { url: "freepops.org", note: "supports webmails." },
                { url: "webmail.mozdev.org", note: "Thunderbird extension (to access Hotmail, yahoo on desktop)" }
            ]
        },
        {
            title: "Tech",
            bkmrks:
            [
                { title: "daniel moth", url: "http://www.danielmoth.com", note: ".Net" },
                { title: "Top 10 things VS2008", url: "http://www.danielmoth.com/Blog/2007/11/top-10-things-to-know-about-visual.html" },
                { title: "Aqua Studio (4.7.2) docs", url: "http://docs.aquafold.com/ads/4.7/" },
                { title: "C# Tutorial - C# Station", url: "http://www.csharp-station.com/Tutorial.aspx" },
                { title: "Douglas Crockford's Wrrrld Wide Web", url: "http://www.crockford.com/" },
                { title: "Firefox - cache", url: "http://about:cache/" },
                { title: "HTML Tidy Project Page", url: "http://tidy.sourceforge.net/" },
                { title: "javascript --- IEBlog : Scripting Debugging in IE", url: "http://blogs.msdn.com/ie/archive/2004/10/26/247912.aspx" },
                { title: "Minification v Obfuscation", url: "http://yuiblog.com/blog/2006/03/06/minification-v-obfuscation/" },
                { title: "SyBooks Online", url: "http://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.help.ase_15.0.blocks/html/blocks/blocks101.htm" },
                { title: "Sergio's Articles (JS and prototype)", url: "http://www.sergiopereira.com/articles/" },
                { title: "W3Schools Online Web Tutorials", url: "http://www.w3schools.com/" },
                { title: "WebMail", url: "http://webmail.mozdev.org/" }
            ]
        },
        {
            title: "Tech-Software",
            bkmrks:
            [
                { url: "www.exp-systems.com", note: "pdf redirect, (merging of PDFs.)" },
                { url: "primopdf.com", note: "free pdf converter" },
                { url: "cutePDF.com", note: "free pdf converter" },
                { url: "ultraedit.com", note: "editor" },
                { url: "xmlSpy", note: "(xml/xsd/xsl) (altova)" },
                { url: "zone-alarm", note: "free Firewall" },
                { url: "f-prot.com/products/home_use", note: "(free anti-virus) (ref by Marko)" },
                { url: "kerio.com", note: "personal firewall (ref by Marko)" },
                { url: "process-Xplorer.com", note: "sysinternals.com/ntw2k/freeware/procexp.shtml (ref by Marko)" },
                { url: "RealVNC.com", note: "(free pc-to-pc acces, like pcAnywhere)" },
                { url: "zonelabs.com", note: "free spyware online detection" },
                { title: "Google: Removing malware", url: "http://www.google.com/support/accounts/bin/answer.py&amp;hl=en&amp;answer=88072" },
                { title: "spyware doctor", url: "http://www.pctools.com/spyware-doctor/" },
                { title: "lavasoft adaware", url: "http://www.lavasoft.com/products/ad-aware_se_personal.php" }
            ]
        },
        {
            title: "Tech-Buy",
            bkmrks:
            [
                { title: "Meritline.com", url: "http://www.meritline.com", note: "" },
                { title: "eforcity.com", url: "http://eforcity.com", note: "Can be accessed via Amazon" },
                { title: "deals-of-america", url: "http://www.dealsofamerica.com/", note: "from multiple sources" },
                { title: "eDeal-Info", url: "http://www.eDealInfo.com", note: "from multiple sources" },
                { title: "deals-2-buy", url: "http://www.deals2buy.com/", note: "Lots of cell phone deals via ;etstalk and wirefly" },
                { url: "meritline" },
                { url: "tigerdirect.com" },
                { url: "overstock.com" },
                { url: "letstalk.com", note: "cell-phone" },
                { url: "wirefly.com", note: "cell-phone" },
                { url: "lyca mobile", note: "ref Abdul Shareef" },
                { url: "Republic", note: "ref Kiran Sangoi" }
            ]
        },
        {
            title: "Tech-classes",
            bkmrks:
            [
                { url: "freeskills.com" },
                { url: "zdu.com" },
                { url: "training.webserve.net" },
                { url: "learnvisualstudio.com" }
            ]
        },
        {
            title: "Tech-certs",
            bkmrks:
            [
                { url: "brainbench.com" },
                { url: "ecertifications.com" },
                { url: "smartcertify.com " },
                { url: "gocertify.com" },
                { url: "proveit.com" },
                { url: "reviewnet.com" },
                { url: "techprofile.com" },
                { url: "qwiz.com" },
                { url: "cert21.com" },
                { url: "cheet-sheet.com", note: "Cheating the certification" }
            ]
        },
        {
            title: "Tech-Jobs",
            bkmrks:
            [
                { url: "Brainbuzz.com" },
                { url: "BrainHunter.com" },
                { url: "Brassring.com" },
                { url: "CareerBuilder.com" },
                { url: "careerinnovations.com" },
                { url: "careerjournal.com", note: "wall street Journal" },
                { url: "CareerPath.com" },
                { url: "CareerShop.com" },
                { url: "CareerWeb.com" },
                { url: "Computerjobs.com" },
                { url: "computer-recruiter.com" },
                { url: "dice.com" },
                { url: "EmployerContact.com", note: "(direct to HR dept)" },
                { url: "EmployMAX.com" },
                { url: "fatjob.com" },
                { url: "FlipDog.com" },
                { url: "FreeAgent.com" },
                { url: "Guru.com" },
                { url: "headhunters.net" },
                { url: "hiretech.net" },
                { url: "hmstri.com", note: "a/c" },
                { url: "Hotjobs" },
                { url: "hotresume.com", note: "a/c" },
                { url: "Infoworksusa.com" },
                { url: "it123.com" },
                { url: "job.com", note: " (previously, usjobboard.com) (a/c) (last acessed: 2003-0926)" },
                { url: "jobbright.com" },
                { url: "jobcircle.com" },
                { url: "JobOptions.com" },
                { url: "Jobs.com" },
                { url: "JobsBazaar.com" },
                { url: "Jobsniper.com" },
                { url: "JobsOnline.com" },
                { url: "JobWarehouse.com" },
                { url: "Kforce.com" },
                { url: "monstor.com" },
                { url: "NationJobs.com" },
                { url: "Net-temps.com" },
                { url: "OperationIT.com" },
                { url: "resumerabbit.com" },
                { url: "Skillsvillage.com" },
                { url: "staffing.net" },
                { url: "techExpousa.com" },
                { url: "Techies.com" },
                { url: "tjobs.com" },
                { url: "uhaveajob.com" },
                { url: "worktree.com" },
                { url: "snagajob.com", note: "hrly jobs" }
            ]
        },
        {
            title: "Tech-Knowledge",
            bkmrks:
        [
            { url: "freefavicon.com" },
            { url: "w3schools.com", note: "(HTML, XML, XSL, XSD, asp.NET)" },
            { url: "hotscripts.com", note: " (lots of useable codes of asp, jscript and others)" },
            { url: "mattkruse.com ", note: "(Java-Script)" },
            { url: "mvps.com ", note: "(tons of sources)" },
            { url: "planetsourcecode.com ", note: "(free source code)" },
            { url: "asptechniques.com" },
            { url: "vbtechniques.com" },
            { url: "sqltechniques.com" },
            { url: "developersites.com" },
            { url: "brinkster.com/Forums/ ", note: "(Tech Tips and free ASP based hosting)" },
            { url: "dynamicdrive.com" },
            { url: "aspzone.com" }
        ]
        },
        {
            title: "_Preeti - Jobs",
            bkmrks:
        [{ title: "__craigslist jobs - admin/office", url: "http://cnj.craigslist.org/ofc/" },
        { title: "__craigslist jobs - cutomer service", url: "http://cnj.craigslist.org/csr/" },
        { title: "__craigslist jobs - PT", url: "http://cnj.craigslist.org/search/jjj?query=&amp;addFour=part-time" },
        { title: "American Staffing Assoc", url: "http://www.americanstaffing.net/" },
        { title: "Complete Personnel Services", url: "http://completepersonnel.com/" },
        { title: "Express Personnel - Somerville", url: "http://bridgewaternj.expresspersonnel.com/jobs/search/" },
        { title: "Express Personnel : sayerville", url: "http://sayrevillenj.expresspersonnel.com/jobs/search/" },
        { title: "Express Personnel Services", url: "http://expresspersonnel.com/us/" },
        { title: "Kelly Services : Kelly Global Home", url: "http://www.kellyservices.com/web/global/services/en/pages/" },
        { title: "OfficeTeam - Temp Staffing", url: "http://www.officeteam.com/portal/site/ot-us" }
        ]
        },
        {
            title: "_temp",
            bkmrks:
            [
                { title: "DAY - TGM", url: "https://www.swday.org/tgm/index.php" },
        { title: "swday - syd bf", url: "https://www.swday.org/" },
        { title: "Efloors.com", url: "http://www.efloors.com/orderstatus.asp?email=n2hhofg02@sneakemail.com&amp;ordid=4566" },
        { title: "FilmiJoy", url: "http://www.filmijoy.com/Forum/" },
        { title: "Gasko 's Family Farm And Greenhouses", url: "http://www.gaskosfamilyfarm.com/" },
        { title: "Gayatri Pariwar - LiteratureHindi", url: "http://www.awgp.org/gamma/LiteratureHindi" },
        { title: "GC Parents: - AOS - CP", url: "http://boards.immigration.com/showthread.php?t=202993" },
        { title: "GC Parents: no birth certificate", url: "http://www.immigration.com/faq/greenvisa.html#159" },
        { title: "GC Parents: SAMPLE AFFIDAVIT OF BIRTH", url: "http://www.immigration.com/faq/sampleaffidavit.html" },
        { title: "GC Parents: sample birth cert affdvt", url: "http://www.immihelp.com/immigration/birth-certificate-affidavit.html" },
        { title: "GC: Interview Prep - Photos", url: "http://travel.state.gov/visa/immigrants/info/info_3740.html" },
        { title: "Gujarati Unicode Fonts", url: "http://www.wazu.jp/gallery/Fonts_Gujarati.html" },
        { title: "Jivamukti Yoga Center", url: "http://www.jivamuktiyoga.com/inspr/veg.html" },
        { title: "lake Placid (Google-Docs)", url: "https://docs.google.com/Doc?id=d9sx6tm_10c8334m7w" },
        { title: "NVC: Immigrant Visa Processing", url: "http://travel.state.gov/visa/immigrants/info/info_1335.html" },
        { title: "SATYAMEVA JAYATE (TRUTH ALONE TRIUMPHS)", url: "http://www.flex.com/~jai/satyamevajayate/" },
        { title: "Sivananda Yoga New York, Open House", url: "http://www.sivananda.org/ny/open_house.html" },
        { title: "zsec.com - rating son Paid Survey sites", url: "http://www.zses.com/inboxdollars.html" }
            ]
        },
        {
            title: "Credit Report",
            bkmrks:
        [{ title: "AnnualCreditReport", url: "https://www.annualcreditreport.com/cra/index.jsp" },
        { title: "ConsumerInfo.com", note: "Free Credit Report", url: "http://www.consumerinfo.com/" }
        ]
        },
        {
            title: "MF",
            bkmrks:
            [{ title: "FidelityInvestor:", url: "http://www.fidelityinvestor.com/" },
        { title: "Adviseronline", url: "http://www.adviseronline.com/" },
        { title: "indexfunds.com", url: "http://www.indexfunds.com/" },
        { title: "Morningstar.com", url: "http://www.morningstar.com/" },
        { title: "Mutual Fund Flash", url: "http://www.mutualfundflash.com/" }
            ]
        },
        {
            title: "Government",
            bkmrks:
            [{ type: 'separator' },
        { title: "PubRec: Nj state - Tax listings", url: "https://wwwnet1.state.nj.us/Treasury/Taxation/TYTR_TLSPS_WEB/Taxlistsearch.aspx" },
        { title: "PubRec: mycentraljersey-DataUniverse", url: "http://www.mycentraljersey.com/apps/pbcs.dll/section?category=datauniverse01" },
        { title: "PubRec: NJ.com-NJbythenumbers", url: "http://www.nj.com/news/bythenumbers/" },
        { type: 'separator' },
        { title: "NJT (ewr-edison)", url: "http://www.njtransit.com/sf/sf_servlet.srv?datepicker=10/27/2009&amp;hdnPageAction=TrainSchedulesFrom&amp;selOrigin=107_NEC&amp;selDestination=38_NEC&amp;OriginDescription=Newark+Penn+Station&amp;DestDescription=Edison" },
        { title: "NJT (edison-ewr)", url: "http://www.njtransit.com/sf/sf_servlet.srv?datepicker=10/27/2009&amp;hdnPageAction=TrainSchedulesFrom&amp;selOrigin=38_NEC&amp;selDestination=107_NEC&amp;OriginDescription=Edison&amp;DestDescription=Newark+Penn+Station" },
        { type: 'separator' },
        { title: "Port Authority", url: "http://www.panynj.gov/" },
        { type: 'separator' },
        { title: "Mdlsx County: Recycling MCIA ", url: "http://www.mciauth.com/recycleframe.htm" },
        { title: "Mdlsx County: Vocational", url: "http://www.ssreg.com/middlesexvotech/default.asp?page=Home" },
        { title: "Mdlsx County:", url: "http://co.middlesex.nj.us/index.asp" },
        { title: "Mdlsx County: Land Records", url: "https://mcrecords.co.middlesex.nj.us/records/index.jsp" },
        { title: "Mdlsx County: ID Cards", url: "http://www.co.middlesex.nj.us/countyclerk/idcards.asp" },
        { type: 'separator' },
        { title: "NJ Helps", url: "http://mynjhelps.org/go", note: "All NJ benefits" },
        { title: "NJ: MVC: mdlsxLoc", url: "http://www.state.nj.us/mvc/Location/Middlesex.htm" },
        { title: "NJ: Healthcare profile", url: "http://12.150.185.184/dca/simple_search.jsp", note: "NJ Attorney General office - Div of Consumer Affairs" },
        { title: "NJ: State Police - Criminal History Records Checks", url: "http://www.njsp.org/about/serv_chrc.html" },
        { title: "NJ: WebFile - Redirect", url: "http://www.njwebfile.com/" },
        { type: 'separator' },
        { title: "psctwy: schools", url: "http://www.piscatawayschools.org/" },
        { title: "psctwy: Public Library", url: "http://www.piscatawaylibrary.org/" },
        { title: "psctwy: Township", url: "http://www.piscatawaynj.org/government" },
        { title: "psctwy: Documents", url: "http://www.piscatawaynj.org/documents" },
        { title: "psctwy: PiscatawayTown.com", url: "http://www.piscatawaytown.com/" }
            ]
        },
        {
            title: "Health",
            bkmrks:
            [{ title: "American Academy of Osteopathy", url: "http://www.academyofosteopathy.org/findphys_geo.cfm" },
        { title: "American Osteopathic Association", url: "http://www.osteopathic.org/" },
        { title: "Ayurvedic Home Remedies", url: "http://www.ayurveda-herbal-remedy.com/home-remedies/index.html" },
        { title: "ayushakti - Dr. Naram", url: "http://www.ayushakti-usa.com/index.html" },
        { title: "Guj Ayurved Univ", url: "http://www.ayurveduniversity.com/" },
        { title: "Health.com", url: "http://health.com/" },
        { title: "onHealth", url: "http://onhealth.com/" },
        { title: "Rediff - Health Guj", url: "http://www.rediff.com/gujarati/health.htm" },
        { title: "Rediff Health Channel", url: "http://health.rediff.com/" },
        { title: "Web MD", url: "http://webmd.com/" },
        { title: "EyeBuyDirect", url: "http://www.eyebuydirect.com/free-frames.php#product" },
        { title: "EyeglassDirect", url: "http://www.eyeglassdirect.com/Guarantee.html" }
            ]
        },
        {
            title: "Ayurveda-Yoga",
            bkmrks:
        [{ url: "ayurshop.net", note: "Affordable price" },
        { title: "Maharishi Ayurveda", url: "mapi.com" },
        { url: "effortlessayurvedicliving.com" },
        { url: "Himalayausa.com" },
        { url: "himalayahealthcare.com ", note: "(india)" },
        { url: "ayur.com", note: "lots of explanations" },
        { url: "ayurveduniversity.com ", note: "Jamnagar Gujarat Ayurved University" },
        { url: "holistic-online.com/ayurveda" },
        { url: "ayurveda-foryou.com" },
        { url: "ayurfoods.com ", note: "some recipes and sells food packets. California" },
        { url: "aarogya.com" },
        { url: "ayurvedwebline.com" },
        { url: "ayurvedicscience.com" },
        { url: "ayurindus.com/ivac/ ", note: "(Indus valley Ayurvedic - Mysore - Andrew Weil)" },
        { url: "drWeil.com" },
        { title: "Sivananda - recipes", url: "sivananda.org/teachings/diet/recipes.html", note: "Ayurveda food recepies" },
        { title: "Ramdev", url: "http://www.ramdevyoga.net", note: "Unofficial but useful" }
        ]
        },
        {
            title: "Stotra",
            bkmrks:
        [{ url: "astrojyoti.com", note: "stotra pdf and mp3" },
        { url: "www.prapatti.com/", note: "stotra pdf and mp3" },
        { url: "www.totalbhakti.com/", note: "audio" },
        { url: "www.raaga.com/", note: "audio" },
        { url: "hindu.org" },
        { url: "indiancultureonline.com/Mystica/index.htm" },
        { url: "atributetohinduism.com" },
        { url: "samskrita-bharati.org" },
        { url: "acharya.iitm.ac.in/sanskrit" },
        { url: "sanskritdocuments.org" },
        { url: "sacred-texts.com" },
        { title: "Gayatri Parivar", url: "http://www.awgp.org/gamma/LiteratureHindi ", note: "(scroll down way too down)" },
        { url: "http://www.awgp.org/books/hindi/ved-darshan/ ", note: "(w/ index, hindi translation)" },
        { url: "http://www.shriganesh.com/slokas/slokas.html", note: "stotra pdf and mp3" },
        { url: "http://www.thevedicfoundation.org/", note: "Very informative site" },
        { title: "HSS - Suryanamaskar", url: "www.hssus.org/sny/about" }
        ]
        },
        {
            title: "Home - Floorings",
            bkmrks:
            [{ title: "30 Color Bamboo flooring hardwood products and manufacturer.", url: "http://www.color-bamboo-flooring.com/colors.htm" },
        { title: "Armstrong - Grand Illusion - Article", url: "http://www.ebuild.com/articles/article.hwx/Q/catCode.18/articleID.447170" },
        { title: "Armstrong - Grand Illusion - Brochure", url: "http://www.armstrong.com/content2/resam/files/37834.pdf" },
        { title: "Articles | Solid or Engineered Wood Flooring? - by FastFloors.com", url: "http://www.fastfloors.com/article_24/Solid-or-Engineered-Wood-Flooring.htm" },
        { title: "bamboo floor complaints from Lumber Liquidators [bamboo-floors.blog-city.com]", url: "http://bamboo-floors.blog-city.com/bamboo_floor_complaints_from_lumber_liquidators.htm" },
        { title: "bamboo floor Question", url: "http://en.allexperts.com/q/Flooring-Carpeting-1621/bamboo-floor.htm" },
        { title: "bamboo?? - Remodeling Forum - GardenWeb", url: "http://ths.gardenweb.com/forums/load/remodel/msg1216594115748.html" },
        { title: "barefootfloor.com", url: "http://www.barefootfloor.com/" },
        { title: "Bruce - Park Avenue - Piano Gloss", url: "http://www.ebuild.com/articles/article.hwx/Q/catCode.18/articleID.447167" },
        { title: "Bruce: Park Ave - Brochure", url: "http://www.bruce.com/content2/resam/files/37835.pdf" },
        { title: "BuildDirect - article", url: "http://www.builddirect.com/Articles/ArticleDirectory/engineered_hardwood_articles/ad_enginrdhardwood_007.aspx" },
        { title: "BuildDirect University - laminate, h/w, engg", url: "http://www.builddirect.com/bdu/bdu_laminate_1_c.aspx" },
        { title: "craigslist services: AMAZING! HARDWOOD", url: "http://cnj.craigslist.org/search/bbb?query=amazing%20hardwood" },
        { title: "craigslist services: FLOORING INSTALLATION", url: "http://cnj.craigslist.org/search/bbb?query=FLOORING%20INSTALLATION" },
        { title: "Flooring and Carpeting: bamboo floor", url: "http://en.allexperts.com/q/Flooring-Carpeting-1621/bamboo-floor-2.htm" },
        { title: "FloorMall", url: "http://www.floormall.com/" },
        { title: "FloorUS.com", url: "http://floorus.com/BambooPro.aspx?gclid=CM-Ty52Gj40CFSIQgQodOQP3nQ" },
        { title: "Hosking Hardwood Flooring", url: "http://www.hoskinghardwood.com/wood-sand-refinishing.asp" },
        { title: "Hudson Wood Flooring", url: "http://www.summitwoodusa.com/index.htm" },
        { title: "iFLOOR.com - Solid vs Engineered Floors", url: "http://www.ifloor.com/articles/wood/woodvswood.html" },
        { title: "Installing Laminate Flooring - Dos and Don'ts!", url: "http://ezinearticles.com/?Installing-Laminate-Flooring---Dos-and-Donts!&amp;id=307282" },
        { title: "laminatefloorings.net", url: "http://www.laminatefloorings.net/" },
        { title: "Lumber Liquidators", url: "http://www.lumberliquidators.com" },
        { title: "National Wood Flooring Association - Consumers Source For Wood Flooring Professionals", url: "http://www.woodfloors.org/consumer/index.aspx" },
        { title: "simplefloors", url: "http://www.simplefloors.com/how_to/free_samples.aspx" },
        { title: "Squeaky Laminate Floor - DoItYourself.com Community Forums", url: "http://forum.doityourself.com/showthread.php?t=169560" },
        { title: "Worldwide Wholesale Floor", url: "http://www.worldwidefloors.com/worldwide/locations/index.cfm" }
            ]
        },
        {
            title: "Home Improve",
            bkmrks:
            [{ title: "HandymanUSA", url: "http://www.handymanusa.com/" },
        { title: "HGTV", url: "http://www.hgtv.com/" },
        { title: "Home Repairs", url: "http://www.repair-home.com/" },
        { title: "Lowe's Home", url: "http://www.lowes.com/lkn?action=home" },
        { title: "MSN House", url: "http://houseandhome.msn.com/garden/gardenoverview.aspx" },
        { title: "The FamilyHandyman(R) Magazine", url: "http://www.familyhandyman.com/200305/handyhints/" }
            ]
        },
        {
            title: "Column",
            bkmrks:
        [{ title: "Aluminum Columns, Fiberglass Columns, Aluminum Railings and Aluminum Fence Products by Superior Aluminum", url: "http://www.superioraluminum.com/" },
        { title: "Classic Columns", url: "http://www.classiccolumn.com/exterior.html" }
        ]
        },
        {
            title: "Garden",
            bkmrks:
            [{ title: "National Gardening Association :: Gardening Resources", url: "http://garden.org/home" }
            ]
        },
        {
            title: "Immigration",
            bkmrks:
        [{ title: "immitracker", url: "http://www.immitracker.com/" },
        { title: "AILA - Amer Imm Lawyers Assoc", url: "http://www.aila.org/" },
        { title: "H1 Tracker", url: "http://www.trackins.com/" },
        { title: "ILW.COM - The immigration portal", url: "http://www.ilw.com/" },
        { title: "Immigration.com (Rajiv S. Khanna)", url: "http://immigration.com/" },
        { title: "ImmigrationPortal", url: "http://www.immigrationportal.com/" },
        { title: "immigrationportal--485--Vermont", url: "http://www.immigrationportal.com/WebX?13@123.lgqJazZ2HsC^0@.ee89cbe" },
        { title: "immigrationportal.com - After The Green Card", url: "http://www.immigrationportal.com/forumdisplay.php?s=420991ac099fcac3843b34dd5ed592a1&amp;forumid=118" },
        { title: "ImmiHelp", url: "http://www.immihelp.com/" },
        { title: "ImmiHelp #2", url: "http://immihelp.tripod.com/" },
        { title: "ImmInfo", url: "http://www.imminfo.com/" },
        { title: "INS", url: "http://www.ins.usdoj.gov/" },
        { title: "ISN - ImmgSuppNwk", url: "http://isn.org/" },
        { title: "Sheela Murthy", url: "http://www.murthy.com/" },
        { title: "Shushterman", url: "http://www.shusterman.com/" },
        { title: "The Oh Law Firm", url: "http://www.immigration-law.com/" },
        { title: "usvisanews.com", url: "http://www.usvisanews.com/" },
        { title: "VisaLaw (Siskind)", url: "http://www.visalaw.com/" },
        { url: "dhs.gov/dhspublic/" },
        { url: "immigrationlinks.com" },
        { url: "immigration.com" },
        { url: "murthy.com" },
        { url: "immiinfo.com" },
        { url: "isn.org" },
        { url: "immitracker.com" },
        { url: "shusterman.com" },
        { url: "usvisanews.com" },
        { url: "ins: ins.gov" },
        { url: "ins: ins.usdoj.gov" },
        { url: "ins: immigration.gov" },
        { url: "https://egov.ins.usdoj.gov/graphics/cris/jsps/caseStat.jsp ", note: "online status check" }
        ]
        },
        {
            title: "Jayesh",
            bkmrks:
        [{ title: "Dice - JMJ's Resume", url: "http://resumes.dice.com/jayesh" },
        { title: "HomePage.com - FileList", url: "http://jayeshjariwala.homepage.com/hp/admin/filemgr/directory.cgi" },
        { title: "Homepage.Com - JMJ's Homepage", url: "http://jayeshjariwala.homepage.com/" },
        { title: "HomePage.com - Login", url: "http://www.homepage.com/hp/html/login/" },
        { title: "MSN - Files - jariwala_jayesh", url: "http://communities.msn.com/jariwalajayesh/files.dca" },
        { title: "Tripod - JMJ Homepage", url: "http://jayeshjariwala.tripod.com/" },
        { title: "Tripod - Login", url: "http://www.tripod.com//bin/membership/login" },
        { title: "Welcome to iName Email", url: "http://www.iname.com/member/login.page" },
        { title: "Y! Briefcase", url: "http://briefcase.yahoo.com/bc/jayeshjariwala" },
        { title: "Y! Briefcase - JMJ's private folder", url: "http://briefcase.yahoo.com/bc/jayeshjariwala" },
        { title: "y! GeoCities - HomePage", url: "http://www.geocities.com/jayeshjariwala/" },
        { title: "y! GeoCities - HomePage FileMngr", url: "http://geocities.yahoo.com/filemanager" }
        ]
        },
        {
            title: "MSDN",
            bkmrks:
            [{ title: "DHTML", url: "http://msdn.microsoft.com/workshop/author/dhtml/reference/objects.asp?frame=true" },
        { title: "Getting Started", url: "http://msdn.microsoft.com/asp.net/using/gettingstarted/" },
        { title: "msdn", url: "http://msdn.microsoft.com/" },
        { title: "msdn --- ADO", url: "http://msdn.microsoft.com/library/default.asp?url=/library/en-us/ado270/htm/mdmscadoobjmod.asp" },
        { title: "msdn --- DHTML", url: "http://msdn.microsoft.com/workshop/author/dhtml/reference/dhtml_reference_entry.asp?frame=true" },
        { title: "msdn --- vs.NET 2003", url: "http://msdn.microsoft.com/vstudio/Previous/2003/default.aspx" },
        { title: "msdn --- XSLT", url: "http://msdn.microsoft.com/library/en-us/xmlsdk/html/6377ce5f-3c45-42a6-b7a9-ec8da588b60c.asp?frame=true" },
        { title: "MSDN-XML", url: "http://msdn.microsoft.com/library/en-us/xmlsdk/html/xmmscXML.asp" },
        { title: "MSDN-XML-MSXML-Redistribution", url: "http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmmscXML.asp" },
        { title: "MSDN-XML-XPATH", url: "http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmrefxpathexamples.asp" },
        { title: "MSDN-XML-XSD", url: "http://msdn.microsoft.com/library/en-us/xmlsdk/html/xmconXMLSchemas.asp" },
        { title: "MSDN/ADO", url: "http://msdn.microsoft.com/library/default.asp?url=/code/list/ado.asp" },
        { title: "MSDN/Script/JScript", url: "http://msdn.microsoft.com/library/default.asp?url=/library/en-us/script56/html/js56jsoriJScript.asp?frame=true" },
        { title: "MSDN/Script/VbScript", url: "http://msdn.microsoft.com/library/en-us/script56/html/vtoriVBScript.asp" },
        { title: "Regular Expression", url: "http://msdn.com/library/en-us/script56/html/js56jsgrpRegExpSyntax.asp" },
        { title: "SQL Server", url: "http://msdn.microsoft.com/library/en-us/tsqlref/ts_tsqlcon_6lyk.asp" },
        { title: "Word Object Model", url: "http://msdn.microsoft.com/library/default.asp?url=/library/en-us/odeopg/html/deovrunderstandingpageobjectmodel.asp" },
        { title: "XSL Reference", url: "http://msdn.microsoft.com/library/psdk/xmlsdk/xslr8ko5.htm" }
            ]
        },
        {
            title: "MSDN - asp.NET",
            bkmrks:
        [{ title: "3 tier", url: "http://msdn2.microsoft.com/en-us/library/bb288041.aspx" },
        { title: "Design Goals for XML in the .NET Framework", url: "http://msdn2.microsoft.com/en-us/library/5w1xh124(VS.80).aspx" },
        { title: "Installing VS Side-by-Side", url: "http://msdn2.microsoft.com/en-us/library/ms246609(VS.80).aspx" },
        { title: "Introduction to HTTP Handlers", url: "chrome://ietab/content/reloaded.html?url=" },
        { title: "Patterns &amp; practices: Getting Started", url: "http://msdn2.microsoft.com/en-us/practices/bb190357.aspx" },
        { title: "PRB: &quot;Access Denied&quot; Error Message When You Call a Web Service While Anonymous Authentication Is Turned Off", url: "http://support.microsoft.com/kb/811318" },
        { title: "Walkthrough: Creating an WebService Using VS", url: "http://msdn2.microsoft.com/en-us/library/87h5xz7x(VS.80).aspx" },
        { title: "Walkthrough: Creating and Using an ASP.NET Web Service in Visual Web Developer", url: "http://msdn2.microsoft.com/en-us/library/8wbhsy70(VS.80).aspx" },
        { title: "Web Services Developer Center", url: "http://msdn.microsoft.com/webservices/" },
        { title: "XML Documentation Comments (C#)", url: "http://msdn2.microsoft.com/en-us/library/b2s063f7(VS.80).aspx" }
        ]
        },
        {
            title: "Radon",
            bkmrks:
            [{ title: "Electronic Radon Gas Detector", url: "http://www.radonamerica.com/Continuous Radon Monitor.htm" },
        { title: "EPA - Radon", url: "http://www.epa.gov/iaq/radon/rnxlines.html" },
        { title: "NJDEP-Radiation", url: "http://www.state.nj.us/dep/rpp/index.htm" },
        { title: "Radiation Data", url: "http://www.radon-test.com/" },
        { title: "Radon Repair", url: "http://www.radonrepair.com/choose.html" },
        { title: "RadonFixIt", url: "http://www.radonfixit.org/" }
            ]
        },
        {
            title: "Real Estate",
            bkmrks:
        [{ title: "ameriSave", url: "http://www.amerisave.com", note: "Ram Katta 15may2013" },
        { title: "American federal Mortgage", url: "http://www.amfedmtg.com/whyChoose.asp", note: "refi 15may2013" },
        { title: "Renter Payment", url: "http://www.williampaid.com", note: "no cost to Lanlord, buid credit history foir renter." },
        { title: "Zillow", url: "http://www.zillow.com", note: "" },
        { title: "Trulia", url: "http://www.trulia.com", note: "" },
        { title: "PropertyShark", url: "http://www.PropertyShark.com", note: "" },
        { title: "About Our Town - Piscataway", url: "http://www.aboutourtown.com/towns/pi/realestate/pi_real_index.htm" },
        { title: "Bankrate - Mortgage Calculator", url: "http://www.bankrate.com/brm/mortgage-calculator.asp" },
        { title: "BankRate - Mortgage Rate Trend", url: "http://www.bankrate.com/brm/news/sav/ratetrends.asp?prodtype=mtg" },
        { title: "eloan", url: "http://www.eloan.com/" },
        { title: "Inman News", url: "http://www.inman.com/index.asp" },
        { title: "iPlace", url: "http://iplace.com/index1.asp" },
        { title: "MLS2U", url: "http://mls2u.com/" },
        { title: "NeighborhoodPlace.com", url: "http://www.neighborhoodplace.com/apps/WebObjects/NPApp" },
        { title: "Smartmoney.com: Real Estate", url: "http://smartmoney.com/home/buying/" },
        { title: "Stop Mortgage Fraud - Home", url: "http://www.stopmortgagefraud.com/" },
        { title: "TerraServer", url: "http://terraserver.homeadvisor.msn.com/address.aspx" },
        { url: "gsmls.com" },
        { url: "forsalebyowner.com" }
        ]
        },
        {
            title: "SiteSeeing",
            bkmrks:
        [{ title: "Acadia Information Center Trenton, Maine", url: "http://palermo.org/acadiainfo/hike/aic-hike.htm" },
        { title: "Alpine Village Resort", url: "http://home.pacbell.net/timothy2/rates.html" },
        { title: "Bushkill Falls - Pennsylvania Travel Destinatio...", url: "http://www.visitbushkillfalls.com/index.htm" },
        { title: "Cottage - Lake George", url: "http://yp.yahoo.com/py/ypResults.py?Pyt=TFour11&amp;YY=24756&amp;city=Lake%20George&amp;state=NY&amp;addr=&amp;zip=12845&amp;slt=&amp;sln=&amp;cs=&amp;btype=default&amp;stx=cottage&amp;stp=a" },
        { title: "Destination Maine - Foliage", url: "http://www.destinationmaine.com/foliage/" },
        { title: "Finger Lakes", url: "http://iloveny.state.ny.us/iloveny/fl.html" },
        { title: "Foliage-Vermont Your guide to visiting the Green Mountain State in autumn", url: "http://www.foliage-vermont.com/" },
        { title: "GORP - Delaware Water Gap NRA, New Jersey &amp; Pen...", url: "http://www.gorp.com/gorp/resource/us_nra/pa_water.htm" },
        { title: "GORP - Guide", url: "http://www.gorp.com/" },
        { title: "Great Smoky Mountains National Park", url: "http://www.great.smoky.mountains.national-park.com/" },
        { title: "Hot Air Balloon Festival", url: "http://www.adirondackballoonfest.org/" },
        { title: "http://parks.yahoo.com//parks/parks/shen/", url: "http://parks.yahoo.com//parks/parks/shen/" },
        { title: "http://www.city.niagarafalls.on.ca/", url: "http://www.city.niagarafalls.on.ca/" },
        { title: "I Love NY", url: "http://iloveny.state.ny.us/" },
        { title: "Jim Thorpe River Adventures", url: "http://jtraft.com/main.html" },
        { title: "Lake George - Yahoo! Local", url: "http://dir.yahoo.com/Regional/U_S__States/New_York/Cities/Lake_George/" },
        { title: "Longwood Gardens - Home Page", url: "http://www.longwoodgardens.org/" },
        { title: "National Park Service - Experience Your America", url: "http://www.nps.gov/" },
        { title: "Niagara USA ~ Niagara Falls &amp; Niagara County To...", url: "http://niagara-usa.com/" },
        { title: "NJ - Division of Parks &amp; Forestry Home Page", url: "http://www.state.nj.us/dep/forestry/parknj/divhome.htm" },
        { title: "NJ - GORP", url: "http://www.gorp.com/gorp/location/nj/nj.htm" },
        { title: "Nordick's Motel of Lake George", url: "http://www.nordicks.com/" },
        { title: "Pennsylvania Dutch Country -Lancaster County FREEBIES!", url: "http://www.800padutch.com/free.html" },
        { title: "The Amish Experience", url: "http://www.amishexperience.com/" },
        { title: "The Peak Foliage Report for 1999", url: "http://www.vtweb.com/foliage/peak.shtml" },
        { title: "The Pennsylvania Dutch Country - Lancaster County Welcome Center", url: "http://www.800padutch.com/" },
        { title: "Niagara", url: "http://www.tourismniagara.com/" },
        { title: "Vermont Foliage Season.", url: "http://www.travel-vermont.com/falltips.htm" },
        { title: "Vermont Fall Foliage", url: "http://www.vtweb.com/foliage/" },
        { title: "Lake George", url: "http://www.visitlakegeorge.com/attract.htm" },
        { title: "Smoky Mountains National Park", url: "http://www.nps.gov/grsm/gsmsite/home/index.html" },
        { title: "Yahoo! Search Results for bushkill", url: "http://search.yahoo.com/bin/search?p=bushkill" }
        ]
        },
        {
            title: "z Others",
            bkmrks:
        [{ title: "#1 Business Card printing site on the Web", url: "http://www.bpxpress.com/orderinfo.htm" },
        { title: "A1 Incorporate Incorporation Services Incorporates Online, incorporate businesses, incorporate online", url: "http://www.a1incorporate.com/" },
        { title: "Aaaaah... A Fresh Look at the Greater Philadelphia, PA Region Southeastern Pennsylvania, The Delaware Valley, Southern New Jer", url: "http://philanet.com/" },
        { title: "Act Off", url: "http://206.115.67.162/cgi-bin/genghis/frontend.cgi?product_type=Thermography&amp;type=Letterhead&amp;barcode=9910060429&amp;item_id=1&amp;ses=146179" },
        { title: "Business Check", url: "https://secure.checksinthemail.com/citm_acb/images/g-purpose-park-ave-lg.gif" },
        { title: "Business Communities - All Businesses - Related...", url: "http://www.irs.gov/smallbiz/allbusinesses/links.htm" },
        { title: "Call forward - LH Joseph Jr &amp; Associates Inc. Tax services, bank accounts, mail service, telephone answering, credit card servi", url: "http://www.lhjosephinc.com/other.htm" },
        { title: "Canon Inkjet Cartridge Store - Product Selection", url: "http://www.canoninkjet.com/cgi-bin/start.cgi?pick=1283&amp;cart=93957439616920" },
        { title: "Charles F. Hahn, Inc. About The Agency - Insurance New Jersey", url: "http://www.hahnagency.com/about_agency.html" },
        { title: "Checks In The Mail", url: "http://www.checksinthemail.com/" },
        { title: "CopyMax", url: "http://www3.ikiosk.com/cgi-shl/index.cgi?sID=1999100213/72a743c16211371a-25&amp;HOME=TRUE" },
        { title: "Falguni Mehta Marriage Bureau: Grooms Wanted", url: "http://www.falgunimehta.com/grooms.html" },
        { title: "File Manager For Forms - IRS", url: "http://www.irs.ustreas.gov/forms_pubs/forms.html" },
        { title: "Findofficespace.com", url: "http://findofficespace.com/new.html" },
        { title: "Greyhound", url: "http://www.greyhound.com/" },
        { title: "Greyhound Lines, Inc.", url: "http://www.greyhound.com/main.shtml" },
        { title: "Herbert Yentis &amp; Company Inc. Realtors", url: "http://www.yentis.com/" },
        { title: "Hot Coupons", url: "http://www.hotcoupons.com/" },
        { title: "http--www.iin.com-iin-india-yelowlaw.html", url: "http://www.iin.com/iin/india/yelowlaw.html" },
        { title: "IIN- IMMIGRATION,TRAVEL,INDIA,FINANCE", url: "http://www.iin.com/" },
        { title: "Incorporate", url: "http://www.incorporate.com/" },
        { title: "Ink jet cartridges refilled economical by Inks Unlimited.", url: "http://www.inksunlimited.com/" },
        { title: "Inkjet Cartridges Yahoo List", url: "http://dir.yahoo.com/Business_and_Economy/Companies/Computers/Business_to_Business/Hardware/Peripherals/Printers/Supplies/Inkjet_Cartridges/" },
        { title: "Instructions - BC-21 Cartridge", url: "http://www.inksunlimited.com/canbci21bl.htm" },
        { title: "ISP List", url: "http://thelist.internet.com/" },
        { title: "Liberty Mutual - Business Insurance - Products", url: "http://www.libertymutual.com/business/libraryold/fraud.html" },
        { title: "Lowestfare.com", url: "http://book4.lowestfare.com/PlanAir.asp?errmsg=No+flights+for+this+combination" },
        { title: "MapQuest", url: "http://www.mapquest.com/" },
        { title: "Modem - X2 - NetCom", url: "http://www.netcom.com/whatsnew/index.html" },
        { title: "NASE.org: National Association for the Self-Emp...", url: "http://www.nase.org/" },
        { title: "Nevada Corporate Headquarters, Inc. - A Nevada resident agent who incorporate businesses and provide corporate services.", url: "http://www.nchinc.com/" },
        { title: "New Jersey Business Gateway Services", url: "http://www.state.nj.us/njbgs/" },
        { title: "NY NJ - Alco Corporate Services, Inc. - Fast and easy online incorporation.", url: "http://www.alcoinc.com/" },
        { title: "office max - Price List", url: "http://www3.ikiosk.com/cgi-shl/pricelist.cgi?sID=1999100213%2F72a743c16211371a-24&amp;product=letterhead&amp;ComeFromHREF=move.cgi" },
        { title: "Office Max Pick a Letterhead Category", url: "http://www3.ikiosk.com/cgi-shl/index.cgi?sID=1999100213%2F72a743c16211371a-1&amp;level=1062" },
        { title: "Offices2share.com - shared office space resource with nationwide listings. Find or list shared space in your city.", url: "http://www.offices2share.com/" },
        { title: "Overseas Pvt Inv Corp", url: "http://www.opic.gov/opichome.asp" },
        { title: "PA - Arsenal Business Center - Office Industrial Buildings For Sale Or Lease Philadelphia PA Flex Space Rental I-95", url: "http://hankinmgt.com/arsenal/" },
        { title: "PaymentBilling", url: "https://www.priceline.com/travel/Airlines/paymentbilling.asp?session_key=670111AC660111AC19991118144902209981385386&amp;Contract=Y" },
        { title: "Personal", url: "http://www.citm.com/images/detailimages/parkave.JPG" },
        { title: "Priceline.com", url: "http://www.priceline.com/" },
        { title: "Real Property's Web Site", url: "http://www.philly-apts.com/" },
        { title: "Techlancer Home Page", url: "http://www.techlancer.com/" },
        { title: "Travelocity.com-airline tickets, hotel accommodations and car reservations online", url: "http://www.travelocity.com/" },
        { title: "VGOOD Office Space Directory", url: "http://www.officespacedirectory.com/" },
        { title: "Welcome to ICOM", url: "http://www.icom.com/" },
        { title: "Worker's Compensation Premiums by State, 1996", url: "http://www.businessweek.com/1997/35/b3542017.htm" },
        { title: "Yahoo! - Internet Services", url: "http://www.yahoo.com/Business_and_Economy/Companies/Internet_Services/" },
        { title: "Yahoo! Business and EconomyCompaniesCorporate ServicesIncorporation Services", url: "http://dir.yahoo.com/Business_and_Economy/Companies/Corporate_Services/Incorporation_Services/" },
        { title: "Yahoo! Driving Directions", url: "http://maps.yahoo.com/py/ddResults.py?Pyt=Tmap&amp;YY=29911&amp;tarname=&amp;tardesc=&amp;taraddr=&amp;tarcsz=Bush%20Kill,%20PA" },
        { title: "Yahoo! Maps", url: "http://maps.yahoo.com/py/maps.py" },
        { title: "Yahoo! Shopping - Office Supplies", url: "http://shopping.yahoo.com/office/" },
        { title: "Yahoo! Travel", url: "http://travel.yahoo.com/" },
        { title: "Yahoo! YP - Appen Menon - Menon &amp; Posner", url: "http://yp.yahoo.com/py/ypMap.py?Pyt=Typ&amp;YY=26675&amp;city=New%20York&amp;state=NY&amp;country=US&amp;slt=40.7142&amp;sln=-74.0064&amp;cs=5&amp;stx=menon&amp;stp=a&amp;ad=2500&amp;ycat=&amp;l=9&amp;tuid=1067590&amp;tq=8&amp;btype=default" }
        ]
        },
        {
            title: "education",
            bkmrks:
            [{ title: "Middlesex County Vocational and Technical Schools", url: "http://mcvts.net/" }
            ]
        },
        {
            title: "Preeti",
            bkmrks:
        [{ title: "Vegetarian recipes - Baked Samosas", url: "http://www.wailana.com/lifestyle/recipes/recipe.php?id=9" },
        { title: "1 - Grade and Shipment History", url: "http://167.208.154.45/students/my_pages/grade_and_ship_history.jhtml" },
        { title: "2- Harcourt Login", url: "http://167.208.154.45/hldlogin.jhtml" },
        { title: "American Hair Loss Council", url: "http://www.ahlc.org/" },
        { title: "Bawarchi Saroj's Cookbook", url: "http://www.bawarchi.com/cookbook/" },
        { title: "Berkeley College", url: "http://www.berkeley.org/college/Collogo.gif" },
        { title: "Careers in This Field: Dressmaking and Design", url: "http://www.harcourt-learning.com/programs/dressmaking/careers.html" },
        { title: "CIGNA HealthCare - Well-Being Newsletter - Hair...", url: "http://www.cigna.com/healthcare/livingwell/wb97d13.html" },
        { title: "food - rediff Guj", url: "http://rediff.com/gujarati/food.htm" },
        { title: "Harcourt", url: "http://www.harcourt.com/" },
        { title: "Harcourt Learning Direct", url: "http://www.harcourt-learning.com/" },
        { title: "Home Sewing Association", url: "http://www.sewing.org/home.html" },
        { title: "KWIK SEW Pattern Co., Inc.", url: "http://www.kwiksew.com/" },
        { title: "KWIK SEW's Listing of Sewing Books", url: "http://www.kwiksew.com/books/books.htm" },
        { title: "Links We Love", url: "http://www.sewing.org/links.html" },
        { title: "Love is", url: "http://www.bluemountain.com/eng/spschutz/Vloveis.html" },
        { title: "Mohawk COllege - Fashion Design", url: "http://www.mohawkc.on.ca/dept/audiovis/carts/fashion.html" },
        { title: "Niagara Falls (Buffalo &amp; Wester New York too...", url: "http://www.ag.net/nextpage.htm" },
        { title: "Northern Life Magazine's", url: "http://www.northbayliving.com/lovenotes/lovenotes.html" },
        { title: "Sewing Discussion", url: "http://192.41.24.213/sewingforum/" },
        { title: "Walk with me in love Poem by Susan Polis Schutz", url: "http://www.bluemountain.com/eng/spschutz/Vwalkwith2.html" },
        { title: "Yahoo! Search Result", url: "http://ink.yahoo.com/bin/query?p=dressmaking%26designing&amp;hc=0&amp;hs=0" },
        { title: "Yahoo.NJ.Edu.Vocational Schools", url: "http://www.yahoo.com/Regional/U_S__States/New_Jersey/Education/Vocational_Schools/" },
        { title: "Yahoo.NJ.Education", url: "http://www.yahoo.com/Regional/U_S__States/New_Jersey/Education/" }
        ]
        },
        {
            title: "white mountain",
            bkmrks:
            [{ title: "Franconia Notch State Park and Cannon Mountain", url: "http://www.cannonmt.com/sindex.php" },
        { title: "NH Division of Parks &amp; Recreation: State Parks - Parks Directory", url: "http://www.nhstateparks.org/ParksPages/ParksDirctry.html" },
        { title: "Official White Mountains Information - New Hampshire: White Mountains | Notches", url: "http://whitemtn.org/displaycommon.cfm?an=1&amp;subarticlenbr=90" },
        { title: "White Mountain National Forest- Welcome!", url: "http://www.fs.fed.us/r9/forests/white_mountain/" }
            ]
        },
        {
            title: "Sudoku",
            bkmrks:
        [{ title: "Daily Mail - Sudoku", url: "http://www.dailymail.co.uk/pages/live/dailymail/sudoku.html?in_article_id=349054&amp;in_page_id=1766" },
        { title: "NYT - Sudoku", url: "http://www.nytimes.com/ref/crosswords/sudoku/medium.html" },
        { title: "SadMan Software - Sudoku Techniques", url: "http://www.sadmansoftware.com/sudoku/techniques.htm" },
        { title: "Solver Sudoku - freeware puzzle maker/solver", url: "http://www.angusj.com/sudoku/hints.php" },
        { title: "Sudoku Today", url: "http://www.sudokutoday.com/" },
        { title: "Sudoku | Life.com", url: "http://www.life.com/Life/sudoku" },
        { title: "tips", url: "http://www.timesonline.co.uk/article/0,,7-1501139,00.html" },
        { title: "Uclick", url: "http://content.uclick.com/content/sudoc.html" }
        ]
        },
        {
            title: "THE work",
            bkmrks:
            [{ title: "Dadaji", url: "http://www.dadaji.net/" },
        { title: "DBT Link", url: "http://www.utexas.edu/students/dbt/" },
        { title: "Gita Pathshala - Sudha Varsha", url: "http://www.gitapathshala.org/" },
        { title: "Swadhyay Pariwar", url: "http://www.swadhyay.org/" },
        { url: "http://yogeshwarkrushi.blogspot.com" },
        { url: "http://groups.yahoo.com/group/Swadhyay/" },
        { url: "http://groups.yahoo.com/group/Swadhyay-discuss" },
        { url: "http://groups.yahoo.com/group/yuvan" }
            ]
        },
        {
            title: "Address search",
            bkmrks:
        [{ url: "infospace.com (apt# listed)" },
        { url: "worldpage.com" },
        { url: "anywho.com" }
        ]
        },
        {
            title: "ATM locator",
            bkmrks:
        [{ url: "ibaa.org/atmsearch.html" },
        { url: "surcharge-free-atms.com" },
        { url: "cuna.org/data/consumer/atm/freeatm.html" }
        ]
        },
        {
            title: "Credit Reporting",
            bkmrks:
        [{ url: "njdobi.org/creditfreeze.htm", note: "NJ Department of Banking and Insurance" },
        { url: "annualcreditreport.com", note: "Free credit reports" },
        { url: "Federal Trade Commission", note: "at 1-888-5-OPT-OUT or online at www.optoutprescreen.com" },
        { url: "consumer.gov/idtheft/", note: "identity theft" },
        { url: "creditinfocenter.com", note: "(deal with debt collector)" }
        ]
        },
        {
            title: "Insurance",
            bkmrks:
        [{ url: "reliaquote.com", note: "Insurace marketplace" },
        { url: "netquote.com" },
        { url: "quotesmith.com" },
        { url: "accuquote.com" },
        { url: "inslink.com" },
        { url: "insurancecompany.com" },
        { url: "4freequotes.com" },
        { url: "lowermybills.com" },
        { url: "selectquote.com" },
        { url: "insweb.com" },
        { url: "insure.com" },
        { url: "health-insurance-on-the-net.com" }
        ]
        },
        {
            title: "Money",
            bkmrks:
            [{ url: "mymoneyblog.com", note: "many useful info" },
        { url: "individual401k.com/individual_401k/benefits.htm", note: "very good info on ind401(k)" },
        { url: "Remit2india.com", note: "money to india" },
        { url: "timesofmoney.com", note: "money to india" },
        { url: "state.nj.us/labor/uiex/main2.html", note: "NJ unemployment:" },
        { url: "wnjpin.state.nj.us/", note: "NJ employment info:" },
        { url: "paycheckcity.com" },
        { url: "planningtips.com/auditinfo.html", note: "(tax)" },
        { url: "401khelpcenter.com/pdf/retirement_plan_comparison.pdf" },
        { url: "ecomhelp.com/KB/finance/kb_solo-401K-plans.htm" },
        { url: "rothira.com" },
        { url: "fairmark.com" }
            ]
        },
        {
            title: "Recipes",
            bkmrks:
        [{ url: "vegweb.com" }
        ]
        },
        {
            title: "travel",
            bkmrks:
        [{ url: "flightview.com", note: "(to see any flight information)" },
        { url: "orbitz.com" },
        { url: "kayak.com" },
        { url: "makemytrip.com", note: "(special for India) 800-INDIA-10" },
        { url: "vayama.com", note: "(special for intl - NZ july08)" },
        { url: "travelocity.com" },
        { url: "bookingbuddy.com", note: "(connects to other sites like orbitz)" },
        { url: "travelhub.com" },
        { url: "viewtrip.com", note: "(to check any bookings)" },
        { url: "virtuallythere.com", note: "(to check any bookings)" },
        { url: "expedia.com" },
        { url: "onetravel.com" },
        { url: "cheaptickets.com" },
        { url: "hotwire.com" },
        { url: "priceline.com" },
        { url: "lowestfares.com" },
        { url: "travelZoo.com" },
        { url: "byways.org", note: "(National Scenic Byways)" },
        { url: "fasttrack.flightexplorer.com/", note: "flightTracker" },
        { url: "roomsaver.com" }
        ]
        },
        {
            title: "rakshas",
            bkmrks:
            [{ title: "HeRaM-Busters", url: "http://geocities.com/herambusters" },
        { title: "Patradvara", url: "http://geocities.com/patradvara/" },
        { title: "swadhyay-pariwar.blogspot", url: "http://swadhyay-pariwar.blogspot.com/" },
        { title: "swadhyayee", url: "http://www.swadhyayee.org/" },
        { title: "vijayuncle.com", url: "http://www.vijayuncle.com/" },
        { title: "Y! Grp:swadhyay_public", url: "http://groups.yahoo.com/group/SWADHYAY_PUBLIC_GROUP/" }
            ]
        },
        {
            title: "Health: frtl",
            bkmrks:
        [{ title: "Akaanksha Clinic", url: "http://ivfcharotar.com/ivf_specialist.html" },
        { title: "Clinic Listing - Search Results", url: "http://www.sart.org/servlets/FindClinic" },
        { title: "CoQ10Deal.com -- Best Prices In The Industry Guaranteed.", url: "http://www.coq10deal.com/Scripts/cart.asp" },
        { title: "Dr Vincent Brandeis - NY ivf", url: "http://www.newyorkfertility.com/about-dr-vincent-brandeis.htm" },
        { title: "Drugs --- ivfmeds.com", url: "http://www.ivfmeds.com/" },
        { title: "Drugs --- ivpcare.com", url: "http://www.ivpcare.com/patient/pharmacy/products/" },
        { title: "Fertility LifeLines™", url: "http://www.fertilitylifelines.com/" },
        { title: "forum", url: "http://www3.fertilethoughts.com/forums/showthread.php?t=542506" },
        { title: "Intra Cytoplasmic Sperm Injection Treatment « Indian Med Guru", url: "http://indianmedguru.wordpress.com/2007/06/05/intra-cytoplasmic-sperm-injection-treatment/" },
        { title: "IVF Connections - Questions/Answers", url: "http://www.ivfconnections.com/questions.htm" },
        { title: "IVF Cycle Timeline", url: "http://www.ivf.com/timelines2.html" },
        { title: "ivf Refund", url: "http://www.infertilitydocs.com/infertility/about.html#3" },
        { title: "ivf-infertility.com", url: "http://www.ivf-infertility.com/" },
        { title: "ivfinfo", url: "http://geocities.com/ivfinfo/" },
        { title: "Malpani Clinic", url: "http://www.drmalpani.com/" },
        { title: "Mandells Pharmacy", url: "http://www.mandellspharmacy.com/" },
        { title: "Medications Information", url: "http://www.chicago-ivf.com/Treatment/Medications.aspx" },
        { title: "Menstrual and Fertility Acronyms and Abbreviations", url: "http://4womenonly.mutexdevelopments.com/acronyms.htm" },
        { title: "NJ dept bnk ins: Health Insurance Programs", url: "http://www.nj.gov/dobi/reform.htm" },
        { title: "RESOLVE - northEast", url: "http://northeast.resolve.org/site/PageServer?pagename=neast_homepage" }
        ]
        },
        {
            title: "Uncategorized",
            bkmrks:
            [{ title: "Box model", url: "http://www.w3.org/TR/REC-CSS2/box.html" },
        { title: "Getting Started with My Web Beta", url: "http://myweb.search.yahoo.com/myresults/starting" },
        { title: "Health-E-Meters - Trustworthy, Physician-Review...", url: "http://content.health.msn.com/living_better/health-e-tools/dessertwizard.htm?y=1" },
        { title: "Herbal Medicine for natural health", url: "http://www.herbaladvisor.com/shop/xq/asp/ptid.27397/qx/productDetail.htm" },
        { title: "HTML Tidy Online", url: "http://infohound.net/tidy/" },
        { title: "JavaScript Toolbox", url: "http://www.mattkruse.com/javascript/" },
        { title: "TurboTax - 2002", url: "http://www.securedstore.com/20837/splash.html?pc=20837&amp;tr=vanguard" },
        { url: "howstuffworks.com" },
        { url: "care2.com" },
        { url: "sell.com", note: "buy vouchers for ait travel." },
        { title: "National Do Not Call Registry", url: "donotcall.gov" },
        { title: "online movies bharatmovies", url: "bharatmovies.com" },
        { title: "online movies bwcinema", url: "bwcinema.com" },
        { title: "OLD geocities HOME", url: "http://www.geocities.com/jayeshjariwala/" },
        { title: "OLD geocities xml", url: "http://www.geocities.com/jayeshjariwala/bkmrk.xml" },
        { title: "OLD geocities file-mngr", url: "http://geocities.yahoo.com/filemanager" }
            ]
        }
        ];

});


