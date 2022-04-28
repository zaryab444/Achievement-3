import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { GeneralService } from '@app/shared/services/general.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
       public pageTitle: string;
       public breadcrumbs: {
        name: string;
        url: string
    }[] = [];

  
  constructor(
          public router: Router,
          public activatedRoute: ActivatedRoute,
          public title: Title,
          public generalService: GeneralService,



  ) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.breadcrumbs = [];
          this.parseRoute(this.router.routerState.snapshot.root);
         // this.setTitle();
      }
  });
  }

  ngOnInit(): void {
  }

  private parseRoute(node: ActivatedRouteSnapshot) {
    if (node.params && Object.keys(node.params).length > 0) {
        return false;
    }
    if (node.data.breadcrumb) {
        if (node.url.length) {
            let urlSegments: UrlSegment[] = [];
            node.pathFromRoot.forEach(routerState => {
                urlSegments = urlSegments.concat(routerState.url);
            });
            const url = urlSegments.map(urlSegment => {
                return urlSegment.path;
            }).join('/');
            this.breadcrumbs.push({
                name: node.data.breadcrumb,
                url: urlSegments.length === 1 && node.component === undefined ? '' : '/' + url
            });
        }
    }
    if (node.firstChild) {
        this.parseRoute(node.firstChild);
    }
}





}
