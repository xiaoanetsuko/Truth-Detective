/**
 * Created by Christine on 10/8/2015.
 */

var myApp = angular.module('imgApp', []);

myApp.controller('imagecontroller', ['$scope', function($scope) {
    $scope.Louis_16 = function() {
        $scope.image = "../img/img_source/louis16.jpg";
        $scope.content = "Louis 16 he is an asshole";
    };

    $scope.bastille = function() {
        $scope.image = "../img/img_source/bastille.jpg";
        $scope.content = "The Storming of the Bastille occurred in Paris, France, on the morning of 14 July 1789. The medieval fortress and prison in Paris known as the Bastille represented royal authority in the centre of Paris. The prison contained just seven inmates at the time of its storming but was a symbol of the abuses of the monarchy: its fall was the flashpoint of the French Revolution.During the reign of this king, France faced a major economic crisis, partially initiated by the cost of intervening in the American Revolution, and exacerbated by a regressive system of taxation. On 5 May 1789, the Estates-General of 1789 convened to deal with this issue, but were held back by archaic protocols and the conservatism of the Second Estate, consisting of the nobility and amounting to only 2% of France's population at the time. On 17 June 1789, the Third Estate, with its representatives drawn from the commoners, reconstituted themselves as the National Assembly, a body whose purpose was the creation of a French constitution. The king initially opposed this development, but was forced to acknowledge the authority of the assembly, which subsequently renamed itself the National Constituent Assembly on 9 July.";
    };

    $scope.Louis_14 = function() {
        $scope.image = "../img/img_source/placeholder.png";
        $scope.content = "Louis XIV (5 September 1638 - 1 September 1715), known as Louis the Great (Louis le Grand) or the Sun King (le Roi-Soleil), was a monarch of the House of Bourbon who ruled as King of France from 1643 until his death. His reign of 72 years and 110 days is the longest of any monarch of a major country in European history. Louis began his personal rule of France in 1661 after the death of his chief minister, the Italian Cardinal Mazarin.[3] An adherent of the concept of the divine right of kings, which advocates the divine origin of monarchical rule, Louis continued his predecessors' work of creating a centralized state governed from the capital. He sought to eliminate the remnants of feudalism persisting in parts of France and, by compelling many members of the nobility to inhabit his lavish Palace of Versailles (formerly a hunting lodge belonging to Louis's father), succeeded in pacifying the aristocracy, many members of which had participated in the Fronde rebellion during Louis's minority. By these means he became one of the most powerful French monarchs and consolidated a system of absolute monarchical rule in France that endured until the French Revolution. During Louis's reign, France was the leading European power and it fought three major wars: the Franco-Dutch War, the War of the League of Augsburg, and the War of the Spanish Succession. There were also two lesser conflicts: the War of Devolution and the War of the Reunions. Louis encouraged and benefited from the work of prominent political, military, and cultural figures such as Mazarin, Colbert, the Grand Cond��, Turenne and Vauban, as well as Moli��re, Racine, Boileau, La Fontaine, Lully, Marais, Le Brun, Rigaud, Bossuet, Le Vau, Mansart, Charles and Claude Perrault, and Le No\u0302tre. Upon his death just days before his seventy-seventh birthday, Louis was succeeded by his five-year-old great-grandson, Louis XV. All of his intermediate heirs predeceased him: his son Louis, le Grand Dauphin; the Dauphin's eldest son Louis, Duke of Burgundy; and Burgundy's eldest son Louis, Duke of Brittany (the elder brother of Louis XV).";
    };

}]);