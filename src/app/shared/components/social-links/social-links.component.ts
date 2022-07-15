import { Component } from "@angular/core";

@Component({
	selector: "app-social-links",
	template: `
		<div>
			<img *ngFor="let social_path of social_paths" src="{{ 'font_awesome/' + social_path | image:'svg'}}" [alt]="social_path" />
		</div>
	`,
	styles: [
		`
			div {
				margin: 0 auto;
				width: 50%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 1rem;
			}
			img {
				width: 3rem;
			}
		`
	]
})
export class SocialLinksComponent {
	social_paths: string[] = ["facebook-square", "facebook-messenger", "twitter", "twitch", "instagram-square"];
}
