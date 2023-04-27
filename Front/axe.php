<?php 
include('api.php'); 
$axes = Api::getAxe();
$entreprise = Api::getEntreprise($_GET["id"]);
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
				<div>
					<img src='radar.php'>
				</div>
			</article>
		</section>
<?php require("footer.php") ?>