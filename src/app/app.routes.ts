import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DesignComponent } from './design/design.component';
import { CustomizationComponent } from './customization/customization.component';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { EgresadosComponent } from './egresados/egresados.component';
import { TeensComponent } from './teens/teens.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    { 
        path: "checkout", 
        component: CheckoutComponent
    },
    { 
        path: "design",
        component: DesignComponent,
    },
    { 
        path: "customize",
        component: CustomizationComponent,
    },
    {
        path: "kids",
        component: KidsComponent,
    },
    {
        path: "egresados",
        component: EgresadosComponent,
    },
    {
        path: "teens",
        component: TeensComponent,
    },
    {path: "message", component: MessageComponent},
    {path: "footer", component: FooterComponent}
];
