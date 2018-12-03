# Playground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Nrwl Extensions for Angular (Nx)

Please design and mockup the component structure for the eCommerce frontend that will be easy to extend and customise while keeping the core code update-able, DRY and SRP compliant.For this test task let's design the component structure of the Product Page (mockup:https://demo.vuestorefront.io/p/WS12/radiant-tee-1561/WS12). 

## Acceptance criteria:

- user can extend/use the core components (AddToCart, Product ...) in it's own themes to create it's own markup + styles while keeping the business logic in the core
- the core components can be updated any time with new release of the base framework.

## Which components should this page consist of? 

- HeaderContainer : smart cmp holding page traversal, state containers (wishlist and shopping), authentication cmp and 

    - PageTraversalContainer: 
	-	GoBackComponent
	-	GoHomeComponent

    ProductShoppingContainer: smart cmp to present actual state of products in shopping and wishlist baskets 
	-	WishListComponent
	-	ShoppingComponent

	-	AuthenticationComponent
	- 	SearchComponent

- ProductDetailsContainer: smart cmp managing product details and operations on it 
	-	ProductImageComponent
	-	BreadCrumbComponent: routing to other categories
	-	ProductPropertiesComponent: id, price, color, size, quantity
	-	AddToShoppingComponent : presentational cmp for adding product to shopping basket
	-	AddToFavoriteComponent : presentational cmp for adding product to favorite list
	-	AddToCompareComponent : presentational cmp for adding product for comparison

- ProductDescriptionComponent

- ReviewContainer
	-	ReviewDescriptionComponent	
	-	AddToReviewComponent

- ProductListComponent

- SubscribeComponent
- FooterComponent

## How to maintain the core/theme separation? 

AddTo... cmps in application can extend from AddToBase cmp that is derived from project's library. Within AddToBase cmp CoreService is injected (again from different library) to maintain separation of responsibilities. 

Whenever AddTo... is about to proceeed with bussiness login operation, it calls derived methods from AddToBase cmp that shifts this logic to service layer.

To maintain theme separation child cmps can overwrite parent theme by using 'styleUrls' annotation.

To allow consumers (child cmps) to extend / re-use components, they can benefit from using content projection.

If core components has data passed from base framework and base framework delegates it's logic to bussiness / service layer, then if bussiness layer rely Observables , data will be pushed to them.
If business 