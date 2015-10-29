/**
 * Created by Christine on 10/8/2015.
 */
    //  using js gets something from DOM as a tag. And this tag can be used as a filter to target corresponding data.
    //  ex: $scope.tag.title


angular.module('TruthDetective')

 .controller('imageController', function($scope) {
        $scope.letterT = function () {
            $scope.title = "A postcard of Eiffel Tower";
            $scope.image = "img/img_source/eiffel.jpg";
            $scope.content = "This is a postcard, but the whole text is already too vague to be read. Luckily, the picture in the back is still clear. It is an old picture of Eiffel Tower. I heard The Eiffel Tower is a tall wrought-iron structure made by man. It is one of the most famous monuments of the world. Besides, it is the most famous landmark of Europe, held the record as the tallest man-made structure of the world from 1889 to 1930 with its height of 324 meters. The Eiffel Tower is named after the owner of the company who designed and built the tower, Engineer Gustave Eiffel. However, I am wondering where the tower located in?"
        };

        $scope.newspaperT = function () {
            $scope.title = "The Most Famous Novel";
            $scope.image = "img/img_source/musketeers.jpg";
            $scope.content = "This is an old newspaper. The headline for that day is a famous novel called the Three Musketeers in that country. This book is typical of Dumas's works: quick-witted heroes who fight and love unceasingly, fast-paced narrative, and entertaining dialogue. In its romantic subject matter, the book is typical of its time; what is not typical is the fact that it has survived and remains entertaining and accessible for modern readers. The story was drawn from a number of original historical sources, including memoirs of events from the period in which the novel takes place. Dumas's collaborator, Auguste Maquet, brought him a rough scenario for a book set during the reign of King Louis XIII and starring the King, Queen Anne, Cardinal Richelieu, and the Duke of Buckingham. Because Dumas's works have been so wildly popular, for a long time he was not considered a 'serious' writer. However, in recent years, more attention has been given to him because his work laid the foundations for bourgeois drama as he brought history alive for a broad segment of the population who otherwise would have had no interest in it and as he created a new kind of Romantic novel."
        };

        $scope.mapT = function () {
            $scope.title = "A Map of Europe";
            $scope.image = "img/img_source/europe_map.png";
            $scope.content = "This is a map of Europe. It seems something missing on this map."
        };

        $scope.Louis_16 = function () {
            $scope.title = "Second Owner of the Hope";
            $scope.image = "../img/img_source/louis16.jpg";
            $scope.content = "This is the portrait of the second owner of the Hope. He is descendent of the Sun King and ruled from 1774 to 1792. During his reign, he tried to reform the country in accordance with Enlightenment ideals. These included efforts to abolish serfdom, remove the taille, and increase tolerance toward non-Catholics. He was determined to be a good king, but his indecisiveness and the overwhelming revolutionary mood among the people failed him. He thus had a tragic ending in the France Revolution."
        };

        $scope.bastille = function () {
            $scope.title = "Storming the Bastille";
            $scope.image = "../img/img_source/bastille.jpg";
            $scope.content = "This painting described a key event which marked the beginning of an important historic event is celebrated in France every July 14th as ‘Bastille Day.’ The event occurred in Paris, France, on the morning of 14 July 1789. The medieval fortress and prison in Paris known as the Bastille represented royal authority in the center of Paris. The power of the diamond’s second owner was severely affected due to the event. In France, Quatorze Juillet (14 July) is a public holiday, usually called Bastille Day in English.";
        };

        $scope.Louis_14 = function () {
            $scope.title = "First Owner of the Hope";
            $scope.image = "../img/img_source/placeholder.png";
            $scope.content = "He was one of France's most important monarchs and the first owner of the Hope. He ruled from 1643 to 1715 and was known as the Sun King. His childhood was marked by the political troubles of the Fronde, so throughout his reign he sought to maintain the unity of the kingdom at all cost, crushing any moves the aristocracy made to obtain extra power. In 1661, after the death of Cardinal Mazarin, finally free of his influence, he wielded absolute power, but was shrewd enough to surround himself with devoted and talented ministers. The royal purse, the army, industry, and administration were all reformed and trade blossomed. He also greatly encouraged the arts. The chateau of Versailles is the finest achievement of his reign. After his dead, the grandson Louis XVI inherited the Hope Diamond.";
        };

        $scope.coin = function () {
            $scope.title = "Commemorative Medal";
            $scope.image = "../img/img_source/placeholder.png";
            $scope.content = "A coin called Commemorative Coin for Louis XVI, on which was the head of Louis 16 who was the second owner of the Hope Diamond. This was one of the first medals produced by Conrad Heinrich Kuchler for Matthew Boulton at the Soho Mint. It was intended to exploit the popular feeling of revulsion in Britain caused by the French Revolution. Since the diamond’s second owner was overthrown at his The reverse of this medal depicts the poignant scene of the diamond’s owner saying farewell to his family.";
        };

        $scope.frenchRevo = function () {
            $scope.title = "An episode in French Revolution";
            $scope.image = "../img/img_source/placeholder.png";
            $scope.content = "This painting implied an important historic event. It was an influential period of social and political upheaval in France during the reign of the diamond’s second owner and was partially carried forward by Napoleon during the later expansion of the French Empire. The event overthrew the monarchy, established a republic, experienced violent periods of political turmoil, and finally culminated in a dictatorship by Napoleon that rapidly brought many of its principles to Western Europe and beyond. Inspired by liberal and radical ideas, the event profoundly altered the course of modern history, triggering the global decline of absolute monarchies while replacing them with republics. The Hope Diamond was lost during this period.";


        };
        $scope.freedom = function () {
            $scope.title = "Liberty Leading the People";
            $scope.image = "../img/img_source/freedom.jpg";
            $scope.content = "This is a painting by Eugène Delacroix commemorating the July Revolution of 1830, which toppled King Charles X of France after the reign of the diamond’s second owner. A woman personifying the concept and the goddess of Liberty leads the people forward over the bodies of the fallen, holding the flag of a historic event – the tricolour flag, which remains France's national flag – in one hand and brandishing a bayonetted musket with the other. The figure of Liberty is also viewed as a symbol of France and the French Republic known as Marianne.";
        };

        $scope.coinsGeorge = function () {
            $scope.title = "George IV Coin Collection";
            $scope.image = "../img/img_source/placeholder.png";
            $scope.content = "This coin is called the Rex Nan Kivell Collection NK5378. It was the eighteenth and nineteenth century commemorative medals. Title devised by cataloguer from medal inscription. Inscriptions on medal: Obverse -- Georgius IIII D. G. Britanniarum Rex F. D.; Reverse -- Proprio Jam Jure Animo Paterno. Inauguratus Die. Julii. XIX Anno. MDCCCXXI."
        };

        $scope.bridge1760 = function () {
            $scope.title = "An old Bridge in 1760s";
            $scope.image = "../img/img_source/bridge1970.jpg";
            $scope.content = "This is an old painting by 1760s. The title is burnt because of some reason. At the back, the painting stated: in 1760s, the author of Gephyralogia: An Historical Account of Bridges, Antient and Modern described this bridge as a curiosity “admired by foreigners, and, in most respects, as remarkable as any in Europe”. From 1758 to 1762, there were numeous houses has been built on the bridge.The whole is covered on each side with houses so disposed as to have the appearance of a continued street, not at all of a bridge. However, due to the potential fire issue, all houses and shops on the bridge were demolished through Act of Parliament. The two centre arches were replaced by a single wider span to improve navigation on the river. What is this bridge?"
        };

        $scope.Buckingham_palace = function () {
            $scope.title = "Buckingham Palace";
            $scope.image = "../img/img_source/Buckingham_palace.jpg";
            $scope.content = "This is an old photo of the Buckingham Palace. Buckingham Palace is the residence and principal workplace of the reigning monarch of the United Kingdom. I’m wondering which city it has been located in."
        };

        $scope.George_IV_1821_color = function () {
            $scope.title = "George IV";
            $scope.image = "../img/img_source/George_IV_1821_color.jpg";
            $scope.content = "A portrait card for George IV, the third owner of the Hope Diamond. He was King of the United Kingdom of Great Britain and Ireland and of Hanover following the death of his father, George III. George IV led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. He commissioned John Nash to build the Royal Pavilion inBrighton and remodel Buckingham Palace, and Sir Jeffry Wyattville to rebuild Windsor Castle. He was instrumental in the foundation of the National Gallery and King's College London. Does he have any relations with the city from our question?"
        };

        $scope.Industrial_Revolution = function () {
            $scope.title = "Industrial Revolution";
            $scope.image = "../img/img_source/Industrial_Revolution.jpg";
            $scope.content = "This is an photo taken in 1765. As a major tuning point in history, the Industrial Revolution was the transition to new manufacturing processes in the period from about 1760 to sometime between 1820 and 1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, improved efficiency of water power, the increasing use of steam power, the development of machine tools and the rise of the factory system. It also included the change from wood and other bio-fuels to coal. Textiles were the dominant industry of the Industrial Revolution in terms of employment, value of output and capital invested; the textile industry was also the first to use modern production methods. Where did the industrial revolution occur?"
        };

        $scope.Great_Exhibition = function () {
            $scope.title = "Great Exhibition";
            $scope.image = "../img/img_source/placeholder.png";
            $scope.content = "In this city, the exhibition was held during a period of economic boom and social change. Britain was expanding, the population had grown from twenty seven million in 1851 to thirty two million in 1871. Britain supplied the railways to the world. In 1869 three hundred thousand tonnes of iron went to the USA alone. The Great Exhibition was partly held to show this prosperity. It was an extension of the trade show idea manufactures in France had used to gain custom. The Great Exhibition also held exhibits from other countries with the intention of showing a dominance, it stated in no uncertain terms that Great Britain was the centre of the world in terms of industry. The Queen, Victoria, recognised how well the Great Exhibition did this 'God bless my dear country which has shown itself so great today.' The exhibition showed the exact state of British industry and was the meant to display the influence the British industries had on the world. How Britain was described was as the 'Workshop of the World.' ";
        };

        $scope.Urban_Working = function () {
            $scope.title = "An urban working class";
            $scope.image = "../img/img_source/placeholder.png";
            $scope.content = "This event raised the quality of life for workers and their families. It also increased the real wage for workers. As one can imagine, the increase in real wages resulted in significant improvements in the standard of living.";
        };

        $scope.Population_Explosion = function () {
            $scope.title = "Population explosion in England";
            $scope.image = "../img/img_source/population_growth.jpg";
            $scope.content = "The most prolific evidence of this event impact on the modern world is seen in the worldwide human population growth. Human population growth is indelibly tied together with increased use of natural and man-made resources, energy, land for growing food and for living, and waste by-products that are disposed of, to decompose, pollute or be recycled. This exponential population growth led to the exponential requirements for resources, energy, food, housing and land, as well as the exponential increase in waste by-products.";
        };

        $scope.Political_Changes = function () {
            $scope.title = "Led to political changes";
            $scope.image = "../img/img_source/political_changes.jpg";
            $scope.content = "By 1830, this event had created a new source of social and economic power: ownership of factories. So it was not surprising that wealthy business owners wanted to share in political power as well. The major landmark of political change brought about by this event was the Reform Bill of 1832.";
        };

        $scope.development = function () {
            $scope.title = "The Booming Development of Urban Areas";
            $scope.image = "../img/img_source/development.jpg";
            $scope.content = "The growth of industries and factories in some areas during the 18th and the 19th centuries led to the generation of more jobs in the manufacturing sector. Owing to the huge discrepancies in the agricultural sector, the common peasants and working classes found it more feasible to seek employment in the newly created sector, as it also seemed more promising. The manufacturing sector, owing to the low production costs and eventually the affordable prices of consumer goods, helped people to save more money for posterity, and also increased their purchasing power. All this eventually led to a growth in their standard of living. This elevation in the people's standard of living led to the growth of a number of subsidiary industries in these areas, which included entertainment and service, alongside others. Thus, these areas became the 'hotspots' for generation of enormous amounts of money, and the seemingly unending opportunities for people. All these factors (and many others), collectively resulted in the creation of a wave of large-scale migration from the rural areas to be the newly established commercial settlements which, in just a few years, went on to become fully urbanized, with all the necessary amenities and facilities. In such areas, owing to the migration of the people, population seemed to explode suddenly, in a rather short span of time.";
        };

        $scope.steam = function () {
            $scope.title = "Steam Replacing Water Power";
            $scope.image = "../img/img_source/steam.jpg";
            $scope.content = "The steam engine was one of the most important technologies of the Industrial Revolution, although steam did not replace water power in importance in Britain until after revolution of the whole industry. From Englishman Thomas Newcomen's atmospheric engine, of 1712, through major developments by Scottish inventor and mechanical engineer James Watt, the steam engine began to be used in many industrial settings, not just in mining, where the first engines had been used to pump water from deep workings. Early mills had run successfully with water power, but by using a steam engine a factory could be located anywhere, not just close to water. The development of the stationary steam engine was an essential early element of the Industrial Revolution, however it should be remembered that for most of the period of the Industrial Revolution the majority of industries still relied on wind and water power as well as horse and man-power for driving small machines.";
        };

        $scope.devMap = function () {
            $scope.title = "Map of the Effect of This Historical Event";
            $scope.image = "../img/img_source/development_map.png";
            $scope.content = "This map shows an expansion of this historical event. The whole Europe was developing during the period of the event.";
        };


    });