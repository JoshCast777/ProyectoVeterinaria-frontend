import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "image"
})
export class ImagePipe implements PipeTransform {
	transform(img_path: string, ext: string = "jpg"): string {
		return "./assets/img/" + img_path + "." + ext;
	}
}
