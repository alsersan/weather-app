import type { Locations } from '$models/location.model';

export function getLocation(query: string): Promise<Locations> {
	return fetch(`/api/location/${query}`).then((data) => data.json());
}
