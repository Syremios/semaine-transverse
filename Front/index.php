<?php 
include('api.php');
$entreprises = Api::getEntreprises();
require("header.php") 
?>
		<section>
			<h3>Diagnostic</h3>
            <?php
                foreach ($entreprises as $entreprise) {
                    ?>
                    <article>
                        <p><a href="<?php echo "axe.php?id=".$entreprise['id']."" ?>">Entreprise <?php echo $entreprise['nom']; ?></a></p> 
                    </article>
                    <?php
                }
                ?>
		</section>
<?php require("footer.php") ?>