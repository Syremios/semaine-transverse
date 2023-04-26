<?php 
include('api.php');
$axe = Api::getAxes($_GET["ida"]);
$entreprise = Api::getEntreprise($_GET["ide"]);
$items = Api::getItem($_GET["ide"],$_GET["ida"]);
require("header.php") 
?>
		<section>
			<h3>Axe <?php echo $axe['nom']; ?></h3>
				<?php
                foreach ($items as $item) {
                    ?>
                    <article>
					<h4><?php echo $item['nom']; ?></h4>
						<table>
							<tr>
								<th>Question</th>
								<th>Réponse</th>
								<th>Score</th>
							</tr>
							<?php
							$resultats = Api::getResultat($item['id']);
							foreach ($resultats as $resultat) {
								?>
								<tr>
									<td><?php echo $resultat['QuestionList']['question']; ?></td>
									<td><?php echo $resultat['ReponseList']['reponse']; ?></td>
									<td><?php echo $resultat['ReponseList']['point']; ?></td>
								</tr>
								<?php
							}
							?>
						</table>

						<p><strong>Idées pour progresser</strong></p>
						<?php
							foreach ($item["Items"] as $proposition) {
								?>
								<p><?php echo $proposition['proposition']; ?></p>
								<?php
							}
							?>
					</article>
                    <?php
                }
                ?>
		</section>
<?php require("footer.php") ?>