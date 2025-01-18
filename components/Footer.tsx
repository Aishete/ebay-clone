export default function Footer() {
  return (
    <footer className="bg-secondary mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Buy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Registration</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Buyer Protection</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Bidding & Buying</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Stores</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Sell</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Start Selling</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Learn to Sell</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Business Policies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Seller Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Company Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Policies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Resolution Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Account Issues</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}