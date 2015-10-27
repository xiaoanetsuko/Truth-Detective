/**
 * Created by Christine on 10/8/2015.
 */
    //  using js gets something from DOM as a tag. And this tag can be used as a filter to target corresponding data.
    //  ex: $scope.tag.title


var myApp = angular.module('imgApp', []);

myApp.controller('imagecontroller', ['$scope', function($scope) {

    $scope.letterT = function() {
        $scope.title="A postcard of Eiffel Tower";
        $scope.image = "../img/img_source/eiffel.jpg";
        $scope.content = "This is a postcard, but the whole text is already too vague to be read. Luckily, the picture in the back side is still clear. It is an old picture of Eiffel Tower. I heard The Eiffel Tower is a tall wrought-iron structure made by man. It is one of the most famous monuments of the world. Besides, it is the most famous landmark of Europe, held the record as the tallest man-made structure of the world from 1889 to 1930 with its height of 324 meters. The Eiffel Tower is named after the owner of the company who designed and built the tower, Engineer Gustave Eiffel. However, I am wondering where the tower located in?"
    };

    $scope.newspaperT = function() {
        $scope.title="The Most Famous Novel";
        $scope.image = "../img/img_source/musketeers.jpg";
        $scope.content = "This is an old newspaper. The headline for that day is a famous novel called the Three Musketeers. This book is typical of Dumas's works: quick-witted heroes who fight and love unceasingly, fast-paced narrative, and entertaining dialogue. In its romantic subject matter, the book is typical of its time; what is not typical is the fact that it has survived and remains entertaining and accessible for modern readers. The story was drawn from a number of original historical sources, including memoirs of events from the period in which the novel takes place. Dumas's collaborator, Auguste Maquet, brought him a rough scenario for a book set during the reign of King Louis XIII and starring the King, Queen Anne, Cardinal Richelieu, and the Duke of Buckingham. Because Dumas's works have been so wildly popular, for a long time he was not considered a 'serious' writer. However, in recent years, more attention has been given to him because his work laid the foundations for bourgeois drama as he brought history alive for a broad segment of the population who otherwise would have had no interest in it and as he created a new kind of Romantic novel."
    };

    $scope.mapT = function() {
        $scope.title="A Map of Europe";
        $scope.image = "../img/img_source/europe_map.png";
        $scope.content = "This is a map of Europe. It seems something missing on this map."
    };



    $scope.Louis_16 = function() {
        $scope.title="Second Owner of the Hope";
        $scope.image = "../img/img_source/louis16.jpg";
        $scope.content = "He is descendent of the Sun King and ruled from 1774 to 1792. During his reign, he tried to reform the country in accordance with Enlightenment ideals. These included efforts to abolish serfdom, remove the taille, and increase tolerance toward non-Catholics. He was determined to be a good king, but his indecisiveness and the overwhelming revolutionary mood among the people failed him. He thus had a tragic ending."
    };

    $scope.bastille = function() {
        $scope.title = "Storming the Bastille";
        $scope.image = "../img/img_source/bastille.jpg";
        $scope.content = "This painting described a key event which marked the beginning of an important historic event is celebrated in France every July 14th as ‘Bastille Day.’ The event occurred in Paris, France, on the morning of 14 July 1789. The medieval fortress and prison in Paris known as the Bastille represented royal authority in the center of Paris. The power of the diamond’s second owner was severely affected due to the event. In France, Quatorze Juillet (14 July) is a public holiday, usually called Bastille Day in English.";
    };

    $scope.Louis_14 = function() {
        $scope.title = "First Owner of the Hope";
        $scope.image = "../img/img_source/placeholder.png";
        $scope.content = "He was one of France's most important monarchs and the first owner of the Hope. He ruled from 1643 to 1715 and was known as the Sun King. His childhood was marked by the political troubles of the Fronde, so throughout his reign he sought to maintain the unity of the kingdom at all cost, crushing any moves the aristocracy made to obtain extra power. In 1661, after the death of Cardinal Mazarin, finally free of his influence, he wielded absolute power, but was shrewd enough to surround himself with devoted and talented ministers. The royal purse, the army, industry, and administration were all reformed and trade blossomed. He also greatly encouraged the arts. The chateau of Versailles is the finest achievement of his reign.";
    };

    $scope.coin = function() {
        $scope.title = "Commemorative Medal";
        $scope.image = "../img/img_source/placeholder.png";
        $scope.content = "This was one of the first medals produced by Conrad Heinrich Kuchler for Matthew Boulton at the Soho Mint. It was intended to exploit the popular feeling of revulsion in Britain caused by the French Revolution. Since the diamond’s second owner was overthrown at his The reverse of this medal depicts the poignant scene of the diamond’s owner saying farewell to his family.";
    };

    $scope.frenchRevo = function() {
        $scope.title = "An episode in French Revolution";
        $scope.image = "../img/img_source/placeholder.png";
        $scope.content = "This painting implied an important historic event. It was an influential period of social and political upheaval in France during the reign of the diamond’s second owner and was partially carried forward by Napoleon during the later expansion of the French Empire. The event overthrew the monarchy, established a republic, experienced violent periods of political turmoil, and finally culminated in a dictatorship by Napoleon that rapidly brought many of its principles to Western Europe and beyond. Inspired by liberal and radical ideas, the event profoundly altered the course of modern history, triggering the global decline of absolute monarchies while replacing them with republics.";


    };

    $scope.freedom = function() {
        $scope.title = "Liberty Leading the People";
        $scope.image = "../img/img_source/freedom.jpg";
        $scope.content = "This is a painting by Eugène Delacroix commemorating the July Revolution of 1830, which toppled King Charles X of France after the reign of the diamond’s second owner. A woman personifying the concept and the goddess of Liberty leads the people forward over the bodies of the fallen, holding the flag of a historic event – the tricolour flag, which remains France's national flag – in one hand and brandishing a bayonetted musket with the other. The figure of Liberty is also viewed as a symbol of France and the French Republic known as Marianne.";
    };

    $scope.coinsGeorge = function() {
        $scope.title = "";
        $scope.image = "../img/img_source/coins.png";
        $scope.content = "Rex Nan Kivell Collection NK5378. Part of the collection: Eighteenth and nineteenth century commemorative medals. Condition: Good. Title devised by cataloguer from medal inscription. Inscriptions on medal: Obverse -- Georgius IIII D. G. Britanniarum Rex F. D.; Reverse -- Proprio Jam Jure Animo Paterno. Inauguratus Die. Julii. XIX Anno. MDCCCXXI."
    };

    $scope.bridge1760 = function() {
        $scope.title = "A old Bridge in 1760s";
        $scope.image = "../img/img_source/bridge1970.jpg";
        $scope.content = "This is an old painting. The title is burnt because of some reason. This painting is painted by 1760s. At the back, it says: in 1760s, the author of Gephyralogia: An Historical Account of Bridges, Antient and Modern described this bridge as a curiosity “admired by foreigners, and, in most respects, as remarkable as any in Europe”. From 1758 to 1762, there were numeous houses has been built on the bridge.The whole is covered on each side with houses so disposed as to have the appearance of a continued street, not at all of a bridge. However, due to the potential fire issue, all houses and shops on the bridge were demolished through Act of Parliament. The two centre arches were replaced by a single wider span to improve navigation on the river. What is this bridge?"
    };

    $scope.Buckingham_palace = function() {
        $scope.title = "Buckingham Palace";
        $scope.image = "../img/img_source/Buckingham_palace.jpg";
        $scope.content = "This is an old photo of the Buckingham Palace. Buckingham Palace is the residence and principal workplace of the reigning monarch of the United Kingdom. I’m wondering which city it has been located in."
    };

    $scope.George_IV_1821_color = function() {
        $scope.title = "George IV";
        $scope.image = "../img/img_source/George_IV_1821_color.jpg";
        $scope.content = "A portrait card for George IV, the third owner of the Hope Diamond. He was King of the United Kingdom of Great Britain and Ireland and of Hanover following the death of his father, George III. George IV led an extravagant lifestyle that contributed to the fashions of the Regency era. He was a patron of new forms of leisure, style and taste. He commissioned John Nash to build the Royal Pavilion inBrighton and remodel Buckingham Palace, and Sir Jeffry Wyattville to rebuild Windsor Castle. He was instrumental in the foundation of theNational Gallery and King's College London. Does he have any relationship with the city from our question?"
    };

    $scope.Industrial_Revolution = function() {
        $scope.title = "Industrial Revolution";
        $scope.image = "../img/img_source/Industrial_Revolution.jpg";
        $scope.content = "This is an photo taken in 1765. As a major tuning point in history, the Industrial Revolution was the transition to new manufacturing processes in the period from about 1760 to sometime between 1820 and 1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, improved efficiency of water power, the increasing use of steam power, the development of machine tools and the rise of the factory system. It also included the change from wood and other bio-fuels to coal. Textiles were the dominant industry of the Industrial Revolution in terms of employment, value of output and capital invested; the textile industry was also the first to use modern production methods. Where did the industrial revolution occur?"
    }

}]);