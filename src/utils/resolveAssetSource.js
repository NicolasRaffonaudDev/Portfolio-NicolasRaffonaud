export const resolveAssetSource = (sources = []) =>
  new Promise((resolve) => {
    const sourceList = Array.isArray(sources) ? sources.filter(Boolean) : [sources].filter(Boolean);

    const trySource = (index) => {
      if (index >= sourceList.length) {
        resolve(null);
        return;
      }

      const image = new Image();
      image.onload = () => resolve(sourceList[index]);
      image.onerror = () => trySource(index + 1);
      image.src = sourceList[index];
    };

    trySource(0);
  });
