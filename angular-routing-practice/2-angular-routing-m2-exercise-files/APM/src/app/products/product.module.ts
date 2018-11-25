import { ProductEditTagsComponent } from './product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit-info.component';

import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';
import { ProductResolver } from './product-resolver.service';
// import { AuthGuard} from '../user/auth.guard-service';

@NgModule({
  imports: [
    SharedModule,

    RouterModule.forChild([
      {
        path: 'products',
        // component: ProductListComponent,
        children: [
          {
            path: '',
            component:ProductListComponent
          },
          {
            path: ':id',
            component: ProductDetailComponent,
            resolve: { product: ProductResolver }
          },

          {
            path: ':id/edit',
            component: ProductEditComponent,
            resolve: { product: ProductResolver },
            children: [
              {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
              },
              {
                path: 'info',
                component: ProductEditInfoComponent
              },
              {
                path: 'tags',
                component: ProductEditTagsComponent
              }

            ]
          }
        ]
      }


    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductResolver

  ]
})
export class ProductModule { }


// RouterModule.forChild([
//   {
//     path: 'products',
//     component: ProductListComponent
//   },
//   {
//     path: 'products/:id',
//     component: ProductDetailComponent,
//     resolve: { product: ProductResolver }
//   },
//   {
//     path: 'products/:id/edit',
//     component: ProductEditComponent,
//     resolve: { product: ProductResolver },
//     children: [

//       {
//         path: '',
//         redirectTo: 'info',
//         pathMatch: 'full'
//       },
//       {
//         path: 'info',
//         component: ProductEditInfoComponent
//       },
//       {
//         path: 'tags',
//         component: ProductEditTagsComponent
//       }

//     ]
//   }


// ])