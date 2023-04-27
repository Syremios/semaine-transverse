<?php 
include('api.php'); 
$axes = Api::getAxe();
$entreprise = Api::getEntreprise($_GET["id"]);
$scores = Api::getScore($_GET["id"]);
require("header.php") 
?>
		<section>
			<h3>Diagnostic</h3>
			<article>
				<p>Entreprise : <?php echo $entreprise['nom']; ?></p> 
				<?php
                foreach ($axes as $axe) {
                    ?>
                        <ul>
							<li><a href="<?php echo "detailAxe.php?ide=".$entreprise['id']."&ida=".$axe['id']."" ?>">Voir Axe <?php echo $axe['nom']; ?></a></li>
						</ul>
                    <?php
                }
                ?>
				<br>
				<p><strong>Synthèse :</strong></p>
				<?php
				foreach ($scores as $score) {
                    ?>
					<ul>
						<li>Axe <?php echo $score['nom']; ?> : <?php echo $score['moyenne']; ?>/5</li>
					</ul>
                    <?php
                }
                ?>
				<div>
					<canvas id="myChart"></canvas>
					<script>
						var ctx = document.getElementById("myChart").getContext('2d');
						
						// Données PHP
						<?php
							// Tableau des titres		
							$titles = array($scores[0]["nom"], $scores[1]["nom"], $scores[2]["nom"]);
							
							// Tableau des valeurs
							$values = array($scores[0]["moyenne"], $scores[1]["moyenne"], $scores[2]["moyenne"]);
							
							// Conversion en format JSON
							$titles_json = json_encode($titles);
							$values_json = json_encode($values);
						?>
						
						// Données JavaScript
						var titles = <?php echo $titles_json; ?>;
						var values = <?php echo $values_json; ?>;
						
						var myChart = new Chart(ctx, {
							type: 'radar',
							data: {
								labels: titles,
								datasets: [{
									label: 'Scores',
									data: values,
									backgroundColor: 'rgba(255, 99, 132, 0.2)',
									borderColor: 'rgba(255, 99, 132, 1)',
									borderWidth: 1
								}]
							},
							options: {
								scale: {
									ticks: {
										beginAtZero: true
									}
								}
							}
						});
					</script>
				</div>
			</article>
		</section>
<?php require("footer.php") ?>