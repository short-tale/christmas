alert("Հարգելի օգտվող ուզում ենք զգուշացնել, որ միանալու է երաժշտություն։ Եթե ձեզ դա կանհանգստացնի կարող եք իջացնել համակարգչի ձայնը");
var audio = new Audio('horse.mp3');
function back_audio(){
	audio.play();
	setTimeout(back_audio, 20000);
}
back_audio();
function test1(){
	var answer = prompt("Ո՞ր ճանապարհով գնամ, որ հասնեմ նվերին(1,2,3,4,5,6)");
	if(answer=="5"){
		alert("Այո, Ճիշտ է:) \n Կարող ես անցնել հաջորդ խնդրին");
	}
	else{
		alert("Ոչ, Սխալ է :( \n կրկին փորձիր");
	}
}
function test2(){
	var answer = prompt("Քանի՞ խաղալիք կարող ենք կախել ծառից(0,1,2,3,4)");
	if(answer=="3"){
		alert("Այո, Ճիշտ է:) \n Կարող ես անցնել հաջորդ խնդրին");
	}
	else{
		alert("Ոչ, Սխալ է :( \n կրկին փորձիր");
	}
}
function tale9(){
	var name = prompt("Գրեք մի անուն:");
	var friend = prompt("Ինչ կուզեիք նվիրել ձեր ամենամոտ ընկերոջը:");
	var daytime = prompt("Գրեք օրվա ժամանակ(առավոտ,երեկո,կեսօր…):");
	var angry = prompt("Ինչ եք անում երբ ջղայն եք:");
	var tired = prompt("Ինչ եք անում երբ հոգնած եք:");
	var tale = name;
	tale += "Մի ձմեռային օր ";
	tale += name;
	tale += " որուշում է իր փոքրիկ քրոջ համար անակնկալ պատրաստել,որը ձյուն չգալու պատճառով տխուր էր: ";
	tale += name;
	tale += "ը իր քրոջ ուրախությունը վեր էր դասում ամեն ինչից և որոշում է իր ամբողջ խնայողությունները ծախսել";
	tale += friend;
	tale += "ի վրա:Նա գիտեր, որ իր քույրը շատ կերջանկանար, որովհետև դա նրա երազած ";
	tale += friend;
	tale += "ն էր: Հաջորդ ";
	tale += daytime;
	tale += ", երբ նրա քույրը ննջում էր, նա նրա բարձի վրա դրեց նվերը, ";
	tale += angry;
	tale += " քրոջը և հեռացավ:Առավոտյան նա տեսավ ,որ իր քույրը ուրախությունից";
	tale += tired;
	tale += "էր:Երբ նա պատուհանից դուրս նայեց, տեսավ, որ ձյուն էր գալիս: Քույրն ասաց. \n -Ձմեռ պապը եկել էր և բերել իմ երազած ";
	tale += friend;
	tale += " իր հետ:";
	tale += name;
	tale += "ը ուղղակի ";
	tale += tired;
	tale += ": Նա երջանիկ էր:";
	alert(tale);
}
function tale8(){
	var animal = prompt("Եթե կենդանի ունենայիք անունը ինչ կդնեիք");
	var number = prompt("Ձեր սիրած թիվը");
	var place = prompt("Որտեղ ձեզ հաստատ չեն գտնի");
	var time = prompt("Ժամը քանիսին եք քնում");
	var eat = prompt("Ինչ եք անում երբ սոված եք");
	var body = prompt("Ձեր սիրած մարմնի մասը");
	var tale = "Իսլանդիայի մայրաքաղաք Ռեյկյավիկում ապրում էր մի փոքրիկ տղա` ";
	tale += animal;
	tale += " անունով։ Նա ";
	tale += number;
	tale += " տարեկան էր, բայց արդեն գրել և կարդալ գիտեր։ ";
	tale += animal;
	tale += "ը երազում էր տեսնել հյուսիսային լույսը և խնդրել էր Ձմեռ պապին, որ այդ տարի լինի հյուսիսային լույս։ Նա իր ծնողներից լսել էր հյուսիսային լույսի մասին, թե ինչպես է ամբողջ երկինքը զանազան լույսերով և փայլերով լցվում։ Դեկտեմբերի 25-ն էր, և բոլորը պատրաստվում էին Սուրբ ծնունդին, իսկ ";
	tale += animal;
	tale += "ը նստած էր ";
	tale += place;
	tale += " և նամակ էր գրում Ձմեռ պապին։ Արդեն երեկո էր, և մայրիկը սեղանն էր զարդարում, բոլորը նստած տոնում էին Սուրբ ծնունդը, իսկ ";
	tale += animal;
	tale += " ը մտածում էր իր ամանորյա նվերի մասին։ Անցավ 7 օր, և արդեն ամսի 31-ն էր ";
	tale += animal;
	tale += "ի ";
	tale += body;
	tale += " փայլում էին: Նա սպասում էր իր ամանորյա նվերին, անհամբերությամբ պատուհանից դուրս էր նայում, սպասում էր, թե երբ է տեսնելու հյուսիսային լույսը։ Ժամը ";
	tale += time;
	tale += " էր, փոքրիկ ";
	tale += animal;
	tale += "ը արդեն հիասթափվել էր, բոլորը տոնում էին Նոր տարին, իսկ նա, պառկած  իր սեյնակում,  ";
	tale += eat;
	tale += " էր լինում, քանի որ չտեսավ հյուսիսային լույսը։ Բայց ";
	tale += animal;
	tale += "ին Մայրիկն է կանչում. \n -";
	tale += animal;
	tale += ", արագ արի, արի` տես, թե ինչ է եղել։ \n";
	tale += animal;
	tale += "ը դուրս է գալիս իր սեյնակից, նայում է պատուհանից դուրս և տեսնում է հյուսիսային լույսը, որին վաղուց սպասում էր... \n \n Հեղինակ՝ Արևիկ Տատինցյան";
	alert(tale);
}
function tale6(){
	var name = prompt("Գրեք ձեր անունը:");
	var place = prompt("Գրեք մի վայր, որտեղ դուք ձեզ վատ եք զգում:");
	var find = prompt("Գրեք մի վայր, որտեղ ձեզ չեն գտնի:");
	var people = prompt("Գրեք մի մարդկանց խումբը(երեխաներ,ուսուցիչներ,դպրոցականներ,ընկերներ):");
	var christmas = prompt("Գրեք մի ամանորյա զարդարանք:");
	var tale = name;
	tale += "ից  Ձմեռ պապին \n Այսօր  Ամանոր է, և ես նամակ եմ գրում քեզ: Հուսով եմ, որ իմ նամակը քեզ կհասնի: Ես ապրում եմ ";
	tale += place;
	tale += "ում: Ինձ այստեղ չեն սիրում: Այդ պատճառով ես թաքնվել եմ ";
	tale += find;
	tale += "ում, որտեղ ինձ չեն գտնի: Բոլոր ";
	tale += people;
	tale += "ը ծիծաղում են ինձ վրա, որովհետև ես հավատում եմ քեզ: Մի անգամ ";
	tale += people;
	tale += "ը իմ վրա ";
	tale += christmas;
	tale += "շպրտեցին, որովհետև ես ցանկանում էի տեղադրել տոնածառը և զարդարել տունը: Խնդրում եմ, որպես նվեր՝ ինձ մի ընտանիք տուր, ով ինձ կսիրի և ինձ վրա ";
	tale += christmas;
	tale += " չի շպրտի: \n Հեղինակ՝ Նազելի Տեր-Պետրոսյան";
	alert(tale);
}
function tale7(){
	var name = prompt("Գրեք ձեր անունը");
	var place = prompt("Ինչպես կանվանեիք այն միջավայրը, որտեղ ապրում եք(ընտանիք, համայնք, քաղաք, փողոց, երկիր)");
	var snow = prompt("Գրեք մի թեթև բան");
	var weader = prompt("Ինչպես կանվանեիք սուպերմարկետների ցանցը, եթե այն ձերը լիներ");
	var christmas = prompt("Ինչպես կանվանեիք համակարգիչների ընկերությունը, եթե այն ձերը լիներ");
	var tale = "Ձմե՞ռ է, թե՞ ամառ․․․ Ես դա չեմ հասկանում։ Ձյո՞ւն է, թե՞ տարօրինակ անձրև։ Օրացույցը ինձ ասում է՝  ձմեռ է, իսկ հարևանները անգամ բաճկոն չեն հագնում։ Ձյան փոխարեն ";
	tale += snow;
	tale += " էր գալիս, իսկ բակում երեխաները ";
	tale += snow;
	tale += "ագնդիկ էին խաղում։ Հանկարծ ես զգացի, որ սա մի եղանակ է, որը ինձ երբեք չի հանդիպել։ Ես մտածեցի, որ այդ եղանակը անվան կարիք ունի, և կազմակերպեցի ժողով երեխաների հետ։ Մենք շատ մտածելուց հետո այն անվանեցինք «";
	tale += weader;
	tale += "ագնդիկ էին խաղում։ Հանկարծ ես զգացի, որ սա մի եղանակ է, որը ինձ երբեք չի հանդիպել։ Ես մտածեցի, որ այդ եղանակը անվան կարիք ունի, և կազմակերպեցի ժողով երեխաների հետ։ Մենք շատ մտածելուց հետո այն անվանեցինք «";
	tale += christmas;
	tale += "»։ Մենք այդ ";
	tale += christmas;
	tale += "ը նշեցինք ամբողջ ";
	tale += place;
	tale += "ով մեր քաղաքի կենտրոնում։ Այդ ";
	tale += christmas;
	tale += "ը իմ համար շատ հետաքրքիր էր, որովհետև ես գտա շատ նվերներ, որոնց վրա գրված էր «";
	tale += name;
	tale += "», իսկ տոնի ամենավերջում բոլորը ինձ շնորհակալություն հայտնեցին, որ իրենց օրը տոնի վերածեցի։ \n \n Հեղինակ՝ Տիգրան Սերոբյան";
	alert(tale);
}
function tale5(){
	var SisterBrother = prompt("Դուք ավելի շատ սիրում եք ձեր քրոջը, թե եղբորը:");
	var build = prompt("Գրեք մի շինություն:");
	var street = prompt("Ինչ հատականիշով կնկարագրեք ձեր փողոցը(գեղեցիկ,  լայն, կեղտոտ․․․):");
	var color = prompt("Գրեք մի գույն։");
	var animal = prompt("Գրեք մի կենդանի։");
	var tale = "Այսօր երկինքը թանձր մշուշով է պատվել, ձմեռ է, ձյուն ու սառնամանիք: Դե իսկի էլ զարմանալի չէ.վաղը դեկտեմբերի 31-ն է, Նոր տարին մոտենում է, իսկ ես դեռ ";
	tale += SisterBrother;
	tale += " համար նվեր չեմ գնել… Դուրս եկա ";
	tale += build;
	tale += " ից` անելիքս չիմանալով: Ճանապարհն անցնում էր մի ";
	tale += street;
	tale += " ծառուղով: Ծառերը կորացել էին ձյան ծանրության տակ: Տեսա` մի ";
	tale += color;
	tale += " ";
	tale += animal;
	tale += " ցատկոտում է այս ու այնկողմ: Մոտեցա, մի քիչ վազվզելուց հետո նա հայտնվեց իմ գրկում: Ուռաաա՜… Ինչքա՜ն կուրախանա ";
	tale += SisterBrother;
	tale += "ը։ ";
	tale += color;
	tale += " ";
	tale += animal;
	tale += "ին: թաքցրի բաճկոնիս տակ ու վազեցի ";
	tale += build;
	tale += ": Սա ամենալավ ամանորյա նվերն է ";
	tale += SisterBrother;
	tale += "ս համար…";
	tale += "\n \n Հեղինակ՝ Էմիլի Հարությունյան";
	alert(tale);
}
function tale4(){
	var heavy = prompt("Գրեք մի ծանր բան");
	var hate = prompt("Մի մարդ, որին տանել չեք կարողանում");
	var blah = prompt("Գրեք մի զզվելի բան");
	var wheater = prompt("Գրեք մի եղանակ");
	var paint = prompt("Ձեզ հաճելի թե տհաճ է ներկի հոտը");
	var food = prompt("Գրեք մի ուտելիք, որը շատ եք սիրում");
	var item = prompt("Մի իր, որ միշտ ցանկացել եք ունենալ");
	var tale = "Այսօր դեկտեմբերի 31-ն է: Բոլորը ամանորյա տրամադրություն ունեն: Այդ օրը շատ տարօրինակ էր, որովհետև ձյան տեղը ";
	tale += heavy;
	tale += " էր գալիս: Բոլորը դուրս էին եկել նայելու այդ տարօրինակ ձյունը: Երբ ես դուրս եկա, այդ ";
	tale += heavy;
	tale += "ը ընկավ իմ գլխին, ես ուշաթափվեցի: Այդ ժամանակ ես տեսա ";
	tale += hate;
	tale += "ին, որը ինձ համար ";
	tale += blah;
	tale += " էր բերել: Հետո նա ինձ տարավ ";
	tale += wheater;
	tale += " պապի մոտ, և ես ստացա նրանից շատ ";
	tale += paint;
	tale += " նվերներ: Հետո ես գնացի ";
	tale += food;
	tale += " սենյակ . այնտեղ ամեն ինչը պատրաստված էր ";
	tale += food;
	tale += "ից: Ես ";
	tale += food;
	tale += "ամարդ պատրաստեցի և հոգնածությունից քնեցի: Արթնացա արդեն իմ անկողնում: Արդեն Ամանոր էր, և ես ստացա մի ուրիշ նվեր ";
	tale += wheater;
	tale += " պապից: Նա ինձ ";
	tale += item;
	tale += " էր տվել: \n \n Հեղինակ՝ Նազելի Տեր-Պետրասյան";
	alert(tale);
}
function tale3(){
	var fly = prompt("Մի վայր, որտեղ ճանճերը հավաքվում են։");
	var farmanimal = prompt("Ձեր սիրած գյուղական կենդանին։");
	var homelot = prompt("Ինչից է ձեր տանը շատ։");
	var egg = prompt("Ինչով եք պատրաստում ձվածեղ։");
	var market = prompt("Ինչ կվերցնեիք խանութից եթե ամեն ինչ անվճար լիներ։ (մեկ բան)");
	var santa = prompt("Ինչ է ձեզ հիշացնում ձմեռ պապիկ արտահայտությունը");
	var tale = "Մենք մեր ընտանիքով երկար մտածելուց հետո որոշեցինք Նոր տարին նշել ";
	tale += fly;
	tale += "։Այդ երեկոյան շատ ցուրտ էր և դրսում թափվում էր ";
	tale += farmanimal;
	tale += ", այդ տեսարանը շատ գեղեցիկ էր։ Ես ձմեռ պապիկից ուզել էի ";
	tale += homelot;
	tale += ", դա իմ կյանքի ամենամեծ երազանքն էր։ Այս տարի ես իմ ընտանիքի անդամների համար գնեցի ";
	tale += egg;
	tale += ",և նրանք շատ ուրախացան։ Արդեն մի քանի ժամ էր մնացել Նոր տարուն, առաքիչը ուշանում էր, ու մեր պատվիրած ";
	tale += market;
	tale += "ը չկար, որպեսզի մենք դնեինք մեր ամանորյա սեղանին։ Երբ խփեց ժամը տասներկուսը, առաքիչը ներս մտավ Ձյունանուշի հագուստով և ձեռքին մի հսկայական ";
	tale += market;
	tale += "։ Ծիծաղելին այն էր, որ Ձյունանուշը "
	tale += santa;
	tale += " էր։ Եվ մենք այս Նոր տարին դիմավորեցինք այդ "
	tale += santa;
	tale += " Ձյունանուշի հետ։ \n \n Հեղինակներ՝ Մարինե Ասատրյան և Անի Գևորգյան";
	alert(tale);
}
function tale2(){
	var home = prompt("Գրեք մի վայր, որտեղ ձեր տնային աշխատանքները արել եք(...ում)");
	var plate = prompt("Գրեք մի իր, որը միշտ երազել եք ունենալ");
	var place = prompt("Գրեք մի շինություն, որը ունի ամենաքիչը երեք հարկ");
	var singer = prompt("Գրեք ձեր սիրելի ուսուցչի անունը");
	var food = prompt("Ինչ հիմա կուտեիք");
	var sound = prompt("Ցատկել, գոռալ թե ճչալ եք նախնտրում ջղայնացած ժամանակ");
	var work = prompt("Որ մասնագիտությունը չեք սիրում");
	var black = prompt("Ինչն է սև");
	var tale = "Մի անգամ մենք Նոր տարին նշում էինք ";
	tale += home;
	tale += "։ Այդ տարի ես շատ նվերներ էի ուզել ձմեռ պապից, բայց գիտեի, որ դա ձմեռ պապը չի բերում, և որոշեցի թաքնվել ու հետևել։ Ես վերցրի իմ ";
	tale += plate;
	tale += "ը և թաքնվեցի ";
	tale += place;
	tale += "ի տանիքին։ Ես շատ էի սիրում ";
	tale += food;
	tale += " և տանիքին տեսա լիքը ";
	tale += food;
	tale += "։ Ես մոտեցա դրանց ու նրանք սկսեցին ";
	tale += sound;
	tale += " ուժգին։ Ես տանիքից թռա կոյուղի և հանդիպեցի ";
	tale += singer;
	tale += "ին։ Նա ինձ համար երգեց։ Ես շատ ուրախացա, և ես էլ պարեցի։ Կոյուղու ջրերը ծափ էին տալիս։ Երբ ճանապարհորդությունը ավարտվեց, ես գոռացի, որ ինձ տանեն հետ։ Երբ հասանք, ես ասացի, որ ես ուզում եմ դառնալ ";
	tale += work;
	tale += "։ Բոլորը ասացին, որ դա լավ միտք է։ Ես այդ պահին հիշեցի, որ ";
	tale += plate; 
	tale += "ը փակել են ծխնելույզը։ Ես վազեցի ";
	tale += place;
	tale += "ի տանիք ու հանեցի ";
	tale += plate;
	tale += "ը . պարզվեց, որ ձմեռ պապը այնքան էր ուզել նվերները բերել, որ նիհարել էր ու սրընթաց ընկել էր բուխարու մեջ և մոխրից դարձել սև ";
	tale += black;
	tale += ": \n \n Հեղինակ՝ Արեգ Սերոբյան";
	alert(tale);
}
function tale1(){
	var name = prompt("Գրեք ձեր անունը և ազգանունը");
	var home = prompt("Գրեք մի վայր, որտեղ գիրք եք կարդում(...ում)");
	var plate = prompt("Գրեք մի իր, որը միշտ ձեզ հետ է");
	var place = prompt("Գրեք մի վայր, որտեղ շատ եք բարկանում (...ում)");
	var santa = prompt("Գրեք ձեր սիրելի ուսուցչի անունը");
	var elf = prompt("Գրեք այն ազգությունը, որը ամենից շատ եք ատում(...ներ,եր)");
	var food = prompt("Գրեք ձեր սիրած ուտելիքը(հոգնակի թվով, ...ներ,եր)");
	var present = prompt("Ինչ եք երազում ունենալ(եզակի թվով)");
	var bus = prompt("Ինչով եք նախընտրում երկար ճանապարհ անցնել(նավ, մեքենա, ձի, հեծանիվ, մոտոցիկլ)");
	var bird = prompt("Գրեք ձեր սիրած թռչունի անունը");
	var tale = "Ես ինձ համար նստած էի ";
	tale += home;
	tale += " և մեկ էլ երկնքից ընկավ ";
	tale += plate;
	tale += ": Ես շատ երջանիկ էի և վերցրի այն: Կատարվեց ամանորյա հրաշք, և ես հայտնվեցի ";
	tale += place;
	tale += ": Այդտեղ կար ևս մի ";
	tale += plate;
	tale += ", և ես մտածեցի, որ, դրան դիպչելով, կվերադառնամ տուն, բայց հայտնվեցի Լապլանդիայում: Դա սովորական Լապլանդիա չէր. այնտեղ ձմեռ պապիկի փոխարեն ";
	tale += santa;
	tale += " էր, իսկ էլֆերի փոխարեն՝ ";
	tale += elf;
	tale += ":Այդ ";
	tale += elf;
	tale += "ը սկսեցին ինձ քաշքշել ու ինձ դարձրին իրենց նման զվարճասեր: Հետո երկնքից սկսեցին թափվել ";
	tale += food;
	tale += ", իսկ ես իմ բերանը լայն բացեցի ու կուլ տվեցի բոլորը: Երբ մտա ";
	tale += santa;
	tale += "ի աշխատասենյակ, մի պահարան տեսա, որի վերևում մի անցք կար: Նա մտցնում էր նամակը անցքից և բացում դուռը, իսկ դռնից ներս լինում էր այն, ինչ նամակում էր գրված: Հետո նա տալիս էր ինձ այդ նվերները, և ես սկսում էի փաթեթավորել: Հետո նա հանդիպեց մի նամակի, որի վրա գրված էր «";
	tale += name;
	tale += "»: Երբ նա մտցրեց իմ նամակը անցքից, դուռը բացվեց, և իմ ուզած ";
	tale += present;
	tale += "ը ցատկեց իմ ձեռքերի մեջ: Հետո իմ նվերը կերպարանափոխվեց և սկսեց օգնել ինձ փաթեթավորելու նվերները: Մենք փաթեթավորեցինք բոլոր նվերները և լցրինք մի մեծ կարմիր պարկի մեջ, հետո այդ պարկը տարանք թռչող ";
	tale += bus;
	tale += "ի մեջ և թռանք երկինք։ Երբ անցնում էինք մեր տան վերևով, ես ցատկեցի և բարեհաջող ընկա մեր տանիքին։ Այդ պահին մի ";
	tale += bird;
	tale += " եկավ և ինձ բռնեց ու բարձրացրեց երկինք և գցեց թռչող ";
	tale += bus;
	tale += "ի մեջ։ Ես այդ պահին ամբողջությամբ դարձա այդ տարօրինակ ";
	tale += elf;
	tale += "ի նման ու հիմա աշխատում եմ ";
	tale += santa;
	tale += "ի համար։ \n \n Հեղինակ՝ Տիգրան Սերոբյան";
	alert(tale);
}
