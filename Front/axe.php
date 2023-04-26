<?php 
include ("jpgraph/src/jpgraph.php");
include ("jpgraph/src/jpgraph_radar.php");
include ("jpgraph/src/jpgraph_log.php");
include('api.php');
$axes = Api::getAxe();
$entreprise = Api::getEntreprise($_GET["id"]);

$tab_materiel = array();
$axe = array('Competence','Reactivite','Numerique');

$graph = new RadarGraph (640,480,"auto"); 

// Param�trage de l'apparence du grahique
$graph->title->Set("C.A. des ventes de mat�riel 2006");
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
require("header.php") 
?>
		<section>
			<h3>Diagnostic</h3>
			<article>
				<p>Entreprise : <?php echo $entreprise['nom']; ?></p> 
				<?php
                foreach ($axes as $axe) {
                    ?>
                    <article>
                        <ul>
							<li><a href="<?php echo "detailAxe.php?ide=".$entreprise['id']."&ida=".$axe['id']."" ?>">Voir Axe <?php echo $axe['nom']; ?></a></li>
						</ul>
                    </article>
                    <?php
                }
                ?>
				<br>
				<p><strong>Synthèse :</strong></p>
				<p>
					Axe Réactivité : 3,8/5 <br>
					Axe Compétences : 3,3/5 <br>
					Axe Numérique : 4,5/5
				</p>
			</article>
		</section>
<?php require("footer.php") ?>