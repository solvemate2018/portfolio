import { Component } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { cibLinkedin, cibFacebook, cibInstagram, cilEnvelopeClosed, cibGithub, cibJava, cibJavascript, cibTypescript, cibPostgresql, cibMysql, cibPostman, cibAzurePipelines, cibGoogleCloud, cibGit, cibDocker, cibJenkins, cibFirebase, cibSpring, cibNodeJs, cibReact, cibSvelte, cibAngular, cibCss3Shiled, cibHtml5 } from '@coreui/icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'georgi-portfolio';
  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cibLinkedin, cibFacebook, cibInstagram, cilEnvelopeClosed, cibGithub, cibJava, cibJavascript, cibTypescript, cibPostgresql, cibMysql, cibPostman, cibAzurePipelines, cibGoogleCloud, cibGit, cibDocker, cibJenkins, cibFirebase, cibSpring, cibNodeJs, cibReact, cibSvelte, cibAngular, cibCss3Shiled, cibHtml5 };
  }
}
