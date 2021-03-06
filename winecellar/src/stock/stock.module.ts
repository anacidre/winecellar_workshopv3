import { NgModule } from '@angular/core';
import { StockPageContainer } from './containers/stock-page/stock-page.container';
import { AddStockPageContainer } from './containers/add-stock-page/add-stock-page.container';
import { EditStockPageContainer } from './containers/edit-stock-page/edit-stock-page.container';
import { StockService } from './services/stock.service';
import { CommonLogicModule } from '../common-logic/common-logic.module';
import { RouterModule } from '@angular/router';
import { FavoriteWinesComponent } from './components/favorite-wines/favorite-wines.component';
import { WineResultComponent } from './components/wine-result/wine-result.component';
import { WineResultsComponent } from './components/wine-results/wine-results.component';
import { CommonModule } from '@angular/common';
import { DetailWineFormComponent } from './components/detail-wine-form/detail-wine-form.component';
import { WineComService } from './services/wine-com.service';
import { WineSearchContainer } from './containers/wine-search/wine-search.container';
import { StockSandbox } from './stock.sandbox';

@NgModule({
  declarations: [
    StockPageContainer, AddStockPageContainer, EditStockPageContainer,
    FavoriteWinesComponent, WineResultComponent, WineResultsComponent, DetailWineFormComponent, WineSearchContainer],
  exports: [StockPageContainer, AddStockPageContainer, EditStockPageContainer],
  imports: [CommonModule, CommonLogicModule, RouterModule],
  providers: [StockService, WineComService, StockSandbox]
})
export class StockModule {
}
