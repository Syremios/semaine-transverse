<?php 
include ("jpgraph/src/jpgraph.php");
include ("jpgraph/src/jpgraph_radar.php");
include ("jpgraph/src/jpgraph_log.php");

$tab_materiel = array(3.8, 3.3, 4.5);
$axe = array('Competence','Reactivite','Numerique');

$graph = new RadarGraph (640,480,"auto"); 

// Param�trage de l'apparence du grahique
$graph->title->Set("Score");
$graph->title->SetFont(FF_VERDANA,FS_NORMAL,12);
$graph->SetTitles($axe);

// Position du graphique par rapport au centre
$graph->SetCenter(0.35,0.55);
// Cacher les marques
$graph->HideTickMarks();
// Couleur de fond
$graph->SetColor('#cccccc@0.3');
$graph->axis->SetColor('blue@0.5'); 
$graph->grid->SetColor('blue@0.5');
$graph->grid->Show();
$graph->axis->title->SetFont(FF_ARIAL,FS_NORMAL,10);
$graph->axis->title->SetMargin(5);

// Cr�er les points
$plot1 = new RadarPlot($tab_materiel);
// Couleur de la ligne
$plot1->SetColor('red');
// Epaisseur de la ligne qui relie les points
$plot1->SetLineWeight(1);
// Couleur de remplissage
$plot1->SetFillColor('red@0.8');
// Apparence des points
$plot1->mark->SetType(MARK_SQUARE);

// Ajouter les points au graphique
$graph->Add($plot1);

$graph->Stroke();
?>