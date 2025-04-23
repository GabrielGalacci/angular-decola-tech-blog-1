import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = "https://th.bing.com/th/id/OIP.Kw5HD9vIyC0Jnmc-XI3tRAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7"
  contentTitle:string = "Minha Notícia"
  contentDescription:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum labore ducimus in illo ab ratione harum laborum officiis officia accusantium, temporibus nemo maiores tempore veniam quae. Quis amet repellat architecto!"
}
