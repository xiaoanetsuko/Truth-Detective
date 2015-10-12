/**
 * Created by Christine on 10/8/2015.
 */

var myApp = angular.module('imgApp', []);

myApp.controller('imagecontroller', ['$scope', function($scope) {

    $scope.letterT = function() {
        $scope.title="Eiffel Tower";
        $scope.image = "../img/img_source/eiffel.jpg";
        $scope.content = "The Eiffel Tower is tbe highest towein tbe world by several hundred feet From the earth's surface to tbe top of the tower is a distance of 984ft. thus being 429ft. higher than tbe Washington monument in tbe United States, which has hitherto been reckoned tbe tallest piece 01 worn in me woria, wim a neigoi ot 555ft."
    };

    $scope.newspaperT = function() {
        $scope.title="The Most Famous Novel";
        $scope.image = "../img/img_source/musketeers.jpg";
        $scope.content = "(The Three Musketeers,) published in 1844-1845, is typical of Dumas's works: quick-witted heroes who fight and love unceasingly, fast-paced narrative, and entertaining dialogue. In its romantic subject matter, the book is typical of its time; what is not typical is the fact that it has survived and remains entertaining and accessible for modern readers.The story was drawn from a number of original historical sources, including memoirs of events from the period in which the novel takes place. Dumas's collaborator, Auguste Maquet, brought him a rough scenario for a book set during the reign of King Louis XIII and starring the King, Queen Anne, Cardinal Richelieu, and the Duke of Buckingham.Because Dumas's works have been so wildly popular, for a long time he was not considered a 'serious' writer. However, in recent years, more attention has been given to him because his work laid the foundations for bourgeois drama as he brought history alive for a broad segment of the population who otherwise would have had no interest in it and as he created a new kind of Romantic novel."
    };

    $scope.mapT = function() {
        $scope.title="A Map of Europe";
        $scope.image = "../img/img_source/europe_map.png";
        $scope.content = "MAPPPPPPPPPPPPPPPPPPPPP"
    };



    $scope.Louis_16 = function() {
        $scope.title="Portrait of the Diamond's Owner";
        $scope.image = "../img/img_source/louis16.jpg";
        $scope.content = "The character in this portrait was one of France's most important monarchs. He ruled from 1643 to 1715 and was known as the Sun King. His childhood was marked by the political troubles of the Fronde, so throughout his reign he sought to maintain the unity of the kingdom at all cost, crushing any moves the aristocracy made to obtain extra power. In 1661, after the death of Cardinal Mazarin, finally free of his influence, this character wielded absolute power, but was shrewd enough to surround himself with devoted and talented ministers such as Colbert, Louvois, and Vauban. The royal purse, the army, industry, and administration were all reformed and trade blossomed. This character also greatly encouraged the arts. The chateau of Versailles is the finest achievement of his reign."
    };

    $scope.bastille = function() {
        $scope.title = "Storming the Bastille";
        $scope.image = "../img/img_source/bastille.jpg";
        $scope.content = "This painting descripted a key event which marked the beginning of an important historic event¡ªis celebrated in France every July 14th as 'Bastille Day.' The event occurred in Paris, France, on the morning of 14 July 1789. The medieval fortress and prison in Paris known as the Bastille represented royal authority in the center of Paris. In France, Quatorze Juillet (14 July) is a public holiday, usually called Bastille Day in English.";
    };

    $scope.Louis_14 = function() {
        $scope.title = "Portrait of the Diamond Owner's Grandfather";
        $scope.image = "../img/img_source/placeholder.png";
        $scope.content = "Louis XIV (5 September 1638 - 1 September 1715), known as Louis the Great (Louis le Grand) or the Sun King (le Roi-Soleil), was a monarch of the House of Bourbon who ruled as King of France from 1643 until his death. His reign of 72 years and 110 days is the longest of any monarch of a major country in European history. Louis began his personal rule of France in 1661 after the death of his chief minister, the Italian Cardinal Mazarin.[3] An adherent of the concept of the divine right of kings, which advocates the divine origin of monarchical rule, Louis continued his predecessors' work of creating a centralized state governed from the capital. He sought to eliminate the remnants of feudalism persisting in parts of France and, by compelling many members of the nobility to inhabit his lavish Palace of Versailles (formerly a hunting lodge belonging to Louis's father), succeeded in pacifying the aristocracy, many members of which had participated in the Fronde rebellion during Louis's minority. By these means he became one of the most powerful French monarchs and consolidated a system of absolute monarchical rule in France that endured until the French Revolution. During Louis's reign, France was the leading European power and it fought three major wars: the Franco-Dutch War, the War of the League of Augsburg, and the War of the Spanish Succession. There were also two lesser conflicts: the War of Devolution and the War of the Reunions. Louis encouraged and benefited from the work of prominent political, military, and cultural figures such as Mazarin, Colbert, the Grand Cond¨¦, Turenne and Vauban, as well as Moli¨¨re, Racine, Boileau, La Fontaine, Lully, Marais, Le Brun, Rigaud, Bossuet, Le Vau, Mansart, Charles and Claude Perrault, and Le No\u0302tre. Upon his death just days before his seventy-seventh birthday, Louis was succeeded by his five-year-old great-grandson, Louis XV. All of his intermediate heirs predeceased him: his son Louis, le Grand Dauphin; the Dauphin's eldest son Louis, Duke of Burgundy; and Burgundy's eldest son Louis, Duke of Brittany (the elder brother of Louis XV).";
    };

    $scope.coin = function() {
        $scope.title = "Commemorative medal";
        $scope.image = "../img/img_source/placeholder.png";
        $scope.content = "A coin that contains the diamond owner's portrait.<br>Rex Nan Kivell Collection NK5378.<br>Part of the collection: Eighteenth and nineteenth century commemorative medals.<br>Condition: Good.<br>Title devised by cataloguer from medal inscription.<br>Inscriptions on medal: Obverse -- Louis XVI. Roi de France et de Navarre; Reverse -- Les fregates du roi de France, la Boussole et l'Astrolabe, commandees par MM. de la Perouse et de Langle, parties du port de Brest en juin 1785.";
    };

    $scope.frenchRevo = function() {
        $scope.title = "An episode in French Revolution";
        $scope.image = "../img/img_source/placeholder.png";
        $scope.content = "This painting implied an important historic event. It was an influential period of social and political upheaval in France that lasted from 1789 until 1799, and was partially carried forward by Napoleonduring the later expansion of the French Empire. The event overthrew the monarchy, established a republic, experienced violent periods of political turmoil, and finally culminated in a dictatorship by Napoleon that rapidly brought many of its principles to Western Europe and beyond. Inspired by liberal and radical ideas, the event profoundly altered the course of modern history, triggering the global decline of absolute monarchies while replacing them with republics. Through the Wars, it unleashed a wave of global conflicts that extended from the Caribbean to the Middle East. Historians widely regard this event as one of the most important events in human history.";


    };

    $scope.freedom = function() {
        $scope.title = "Liberty Leading the People";
        $scope.image = "../img/img_source/freedom.jpg";
        $scope.content = "This is a painting by Eugene Delacroix commemorating the July Revolution of 1830, which toppled King Charles X of France. A woman personifying the concept and the goddess of Liberty leads the people forward over the bodies of the fallen, holding the flag of a historic event ¨C the tricolour flag, which remains France's national flag ¨C in one hand and brandishing a bayonetted musket with the other. The figure of Liberty is also viewed as a symbol of France and the French Republic known as Marianne.";
    };


}]);