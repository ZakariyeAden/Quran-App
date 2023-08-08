
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
--Chapters: 114 Table
CREATE TABLE "chapter" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (40) NOT NULL,
    "arabic_name" VARCHAR (40) NOT NULL,
    "translated_name" VARCHAR (40) NOT NULL,
    "chapter_number" INT NOT NULL
);
-- Plan for each User Table
CREATE TABLE "plan" (
    "id" SERIAL PRIMARY KEY,
  	"user_id" INT REFERENCES "user"
);
-- Chapter Plan for User Table
CREATE TABLE "chapter_plan"(
 "id" SERIAL PRIMARY KEY,
 "chapter_id" INT REFERENCES "chapter",
 "plan_id" INT REFERENCES "plan",
 "completed" BOOLEAN DEFAULT FALSE,
 "deadline" DATE NOT NULL,
 "current_date" DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Insert all of the Chapters into the Table!
INSERT INTO "chapter" ("name","arabic_name","translated_name", "chapter_number")
VALUES 
('Al Fatihah','الفاتحة','The Opener',1),
('Al Baqarah','البقرة','The Cow',2),
('Āli `Imrān','آل عمران','The Family of Imran ',3),
('Al-Maidah','المائدة','The Table Spread',4),
('Al-Anam','الأنعام','The Cattle',5),
('Al-Araf','الأعراف','The Heights',6),
('Al-Anfal','الأنفال','The Spoils of War',7),
('At-Tawbah','التوبة','The Repentance',8),
('Yūnus','يونس','Jonas',9),
('Hūd','هود','Hud',10),
('Yūsuf','يوسف','Joseph',11),
('Ar-Ra`d','الرعد','The Thunder',12),
('Ibrāhīm','ابراهيم','Abraham',13),
('Al-Ĥijr','الحجر','The Rock',14),
('An-Nahl','النحل','The Bee',15),
('Al-Isra','الإسراء','The Night Journey',16),
('Al-Kahf','الكهف','The Cave',17),
('Maryam','مريم','Mary',18),
('Taha','طه','Ta-Ha',19),
('Al-Anbya','الأنبياء','The Prophets',20),
('Al-Hajj','الحج','The Pilgrimage',21),
('Al-Hajj','الحج','The Pilgrimage',22),
('Al-Mu minun','المؤمنون','The Believers',23),
('An-Nur','النور','The Light',24),
('Al-Furqan','الفرقان','The Criterion',25),
('Ash-Shu`arā','الشعراء','The Poets',26),
('An-Naml','النمل','The Ant',27),
('Al-Qasas','القصص','The Stories',28),
('Al-`Ankabūt','العنكبوت','The Spider',29),
('Ar-Rum','الروم','The Romans',30),
('Luqman','لقمان','Luqman',31),
('As-Sajdah','السجدة','The Prostration',32),
('Al-Ahzab','الأحزاب','The Clans',33),
('Saba','سبإ','Sheba',34),
('Fatir','فاطر','The Originator',35),
('Ya-Sin','يس','Ya Sin',36),
('As-Saffat','الصافات','Those who set the Ranks',37),
('Sad','ص','"The Letter Saad',38),
('Az-Zumar','الزمر','The Groups',39),
('Ghafir','غافر','The Forgiver',40),
('Fussilat','فصلت','Explained in Detail',41),
('Ash-Shuraa','الشورى','The Consultation',42),
('Az-Zukhruf','الزخرف','The Ornaments of Gold',43),
('Ad-Dukhan','الدخان','The Smoke',44),
('Al-Jathiyah','الجاثية','The Crouching',45),
('Al-Ahqaf','الأحقاف','The Dunes',46),
('Muhammad','محمد','Muhammad',47),
('Al-Fath','الفتح','The Victory',48),
('Al-Hujurat','الحجرات','The Rooms',49),
('Qaf','ق','The Letter Qaf',50),
('Adh-Dhariyat','الذاريات','The Winnowing Winds',51),
('At-Tur','الطور','The Mount',52),
('An-Najm','النجم','The Star',53),
('Al-Qamar','القمر','The Moon',54),
('Ar-Rahman','الرحمن','The Beneficent',55),
('Al-Wāqi`ah','الواقعة','The Inevitable',56),
('Al-Hadid','الحديد','The Iron',57),
('Al-Mujadila','المجادلة','The Pleading Woman',58),
('Al-Hashr','الحشر','The Exile',59),
('Al-Mumtahanah','الممتحنة','She that is to be examined',60),
('As-Saf','الصف','The Ranks',61),
('Al-Jumu`ah','الجمعة','Friday',62),
('Al-Munafiqun','المنافقون','The Hypocrites',63),
('At-Taghabun','التغابن','The Mutual Disillusion',64),
('At-Talaq','الطلاق','The Divorce',65),
('At-Tahrim','التحريم','The Prohibition',66),
('Al-Mulk','الملك','The Sovereignty',67),
('Al-Qalam','القلم','The Pen',68),
('Al-Haqqah','الحاقة','The Reality',69),
('Al-Ma`ārij','المعارج','The Ascending Stairways',70),
('Nuh','نوح','Noah',71),
('Al-Jinn','الجن','The Jinn',72),
('Al-Muzzammil','المزمل','The Enshrouded One',73),
('Al-Muddaththir','المدثر','The Cloaked One',74),
('Al-Qiyamah','القيامة','The Resurrection',75),
('Al-Insan','الانسان','The Man',76),
('Al-Mursalat','المرسلات','The Emissaries',77),
('An-Naba','النبإ','The Announcement',78),
('An-Nāzi`āt','النازعات','Those who drag forth',79),
('Abasa','عبس','He Frowned',80),
('At-Takwir','التكوير','The Overthrowing',81),
('Al-Infitar','الإنفطار','The Cleaving',82),
('Al-Mutaffifin','المطففين','The Defrauding',83),
('Al-Inshiqaq','الإنشقاق','The Splitting Open',84),
('Al-Buruj','البروج','The Constellations',85),
('At-Tariq','الطارق','The Nightcommer',86),
('Al- A`lá','الأعلى','The Most High',87),
('Al-Ghashiyah','الغاشية','The Overwhelming',88),
('Al-Fajr','الفجر','The Dawn',89),
('Al-Balad','البلد','The City',90),
('Ash-Shams','الشمس','The Sun',91),
('Al-Layl','الليل','The Night',92),
('Ad-Duhaa','الضحى','The Morning Hours',93),
('Ash-Sharh','الشرح','The Relief',94),
('At-Tin','التين','The Fig',95),
('Al-`Alaq','العلق','The Clot',96),
('Al-Qadr','القدر','The Power,Fate',97),
('Al-Bayyinah','البينة','The Clear Proof',98),
('Az-Zalzalah','الزلزلة','The Earthquake',99),
('Al-`Ādiyāt','العاديات','The Chargers',100),
('Al-Qāri`ah','القارعة','The Calamity',101),
('At-Takathur','التكاثر','Competition',102),
('Al-`Aşr','العصر','The Declining Day',103),
('Al-Humazah','الهمزة','The Traducer',104),
('Al-Fil','الفيل','The Elephant',105),
('Quraysh','قريش','Quraysh',106),
('Al-Mā`ūn','الماعون','Almsgiving',107),
('Al-Kawthar','الكوثر','The Abundance',108),
('Al-Kafirun','الكافرون','The Disbelievers',109),
('An-Nasr','النصر','The Divine Support',110),
('Al-Masad','المسد','The Palm Fiber',111),
('Al-Ikhlas','الإخلاص','The Sincerity',112),
('Al-Falaq','الفلق','The Daybreak',113),
('An-Nas','الناس','Mankind',114);

--  SELECT From Chapter Table
SELECT * FROM "chapter";


-- NEED TO INSERT ALL OF THE USERS IN PLAN FOR EACH USER IN ORDER TO POST CHAPTER PLAN
-- INSERT ALL OF THE USERS IN THE PLAN
INSERT INTO "plan" ("user_id")
VALUES 
(1);

-- TESTING INSERT for POST
INSERT INTO "chapter_plan" ("chapter_id","plan_id","deadline" )
VALUES (1,1,'12/12/2023');

-- GET for plan
SELECT * FROM "chapter_plan"
JOIN "chapter"
ON "chapter"."id"  = "chapter_plan"."chapter_id";

-- DELETE
DELETE FROM "chapter_plan" WHERE id = 1;
-- UPDATE by id
UPDATE "chapter_plan" SET "completed" = TRUE WHERE id = 1;