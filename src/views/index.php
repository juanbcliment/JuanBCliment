<!DOCTYPE html>
<html lang="en">

<?php include("./partialsViews/headPartial.php"); ?>

<body>
    <!-- header -->
    <?php include("./partialsViews/headerPartial.php"); ?> 
    <main>
        <div class="presentation">
            <h2 data-section="profile" data-value="rol">PHP JavaScript SQL</h2>
            <p data-section="profile" data-value="description">Me apasiona aprender nuevas tecnologías y ampliar mis habilidades de desarrollo web. Actualmente estoy cursando la carrera de ingeniería informática y me estoy especializando en back-end con PHP, Node.js, SQL, phpMyAdmin y Laravel, pero tambien cuento con conocimientos en HTML, CSS, Boostrap, MVC y el manejo de repositorio con Github. Estoy en la búsqueda de una empresa donde me permita, aportar y seguir desarrollándome profesionalmente, tanto en modalidad híbrida como remota.</p>
        </div>
        <div class="experience">
            <div class="job">
                <h2>Experience</h2>
                <div class="experience_ind" >
                    <h3 data-section="experience" data-value="first-job-title">Soporte</h3>
                    <h4 data-section="experience" data-value="first-job-company">Thinkion</h4>
                    <p data-section="experience" data-value="first-job-dates">Diciembre 2023</p>
                    <p data-section="experience" data-value="first-job-description">json sql phpMyAdmin</p>
                </div>
                <div class="experience_ind">
                    <h3 data-section="experience" data-value="second-job-title">Técnico en Control de calidad</h3>
                    <h4 data-section="experience" data-value="second-job-company">Novatech S.A</h4>
                    <p data-section="experience" data-value="second-job-dates">Agosto 2016 - Octubre 2016</p>
                    <p data-section="experience" data-value="second-job-description">Controlar instalación del sistema operativo, Comprobación de circuitos electrónicos,Optimizar posibles fallas en fabricación</p>
                </div>
                <div class="experience_ind">
                    <h3 data-section="experience" data-value="third-job-title">Pasantía</h3>
                    <h4 data-section="experience" data-value="third-job-company">Gulf Oil Argentina</h4>
                    <p data-section="experience" data-value="third-job-dates">Junio 2014 - Noviembre 2014</p>
                    <p data-section="experience" data-value="third-job-description">Mantenimiento preventivo, Mantenimiento correctivo, Optimizar procesos productivos</p>
                </div>
            </div>
            <div class="academic">
                <div class="experience_ind">
                    <h2 data-section="academic" data-value="academic-title">Formación académica</h2>
                    <h3 data-section="academic" data-value="first-eduction-title">Ingeniería informática</h3>
                    <h4 data-section="academic" data-value="first-eduction-institute">Universidad de Palermo</h4>
                    <p data-section="academic" data-value="first-eduction-dates">Agosto 2023 - Actualidad</p>
                    <p data-section="academic" data-value="first-eduction-description">Cursando actualmente el primer año de la carrera</p>
                    <div class="experience_ind">
                        <h3 data-section="academic" data-value="second-eduction-title">PHP Developer</h3>
                        <h4 data-section="academic" data-value="second-eduction-institute">Argentina Programa 4.0</h4>
                        <p data-section="academic" data-value="second-eduction-dates">Mayo 2023 - Noviembre 2023 Graduado</p>
                        <p data-section="academic" data-value="second-eduction-description">Manejo de PHP, Html, CSS, Laravel, SQl y Boostrap, creación de una pagina web, Creación de una base de datos con phpMyAdmin</p>
                    </div>
                    <div class="experience_ind">
                        <h3 data-section="academic" data-value="third-eduction-title">Desarrollo Web Full Stack</h3>
                        <h4 data-section="academic" data-value="third-eduction-institute">Digital House</h4>
                        <p data-section="academic" data-value="third-eduction-dates">Junio 2022 - Diciembre 2022 Graduado</p>
                        <p data-section="academic" data-value="third-eduction-description">Creación de una página web de cero con Node.js, metodología MVC, phpMyAdmin, HTML, CSS y SQL,manejo de Github y control de versiones</p>
                    </div>
                    <div class="experience_ind">
                        <h3 data-section="academic" data-value="fourth-eduction-title">Secundaria</h3>
                        <h4 data-section="academic" data-value="fourth-eduction-institute">Escuela Técnica Alemana Moreno</h4>
                        <p data-section="academic" data-value="fourth-eduction-dates">Finalizada en Diciembre de 2014</p>
                        <p data-section="academic" data-value="fourth-eduction-description">Graduado con título de Técnico Electromecánico</p>
                    </div>
                </div>
            </div>
        </div>


        <br><br><br><br>
    </main>

    <!-- footer -->
    <?php include("./partialsViews/footerPartials.php"); ?>


</body>

</html>