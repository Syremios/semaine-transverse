<?php 

require_once('api.php');
$entreprises = Api::getEntreprises();
require("header.php") 
?>
		<section>
			<h3>Diagnostic</h3>
            <?php
                foreach ($entreprises as $entreprise) {
                    ?>
                    <article>
                        <p>Entreprise <?php echo $entreprise['nom']; ?></p> 
                    </article>
                    <?php
                }
                ?>
		</section>
<?php require("footer.php") ?>