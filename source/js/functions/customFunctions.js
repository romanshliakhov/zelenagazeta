export const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || 'flex';
	el.style.transition = `all ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
};
// ----------------------------------------------------
export const fadeOut = (el, timeout) => {
	el.style.opacity = 1;
	el.style.transition = `all ${timeout}ms ease`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = 'none';
	}, timeout);
};

// ----------------------------------------------------
export function addMultiListener(element, eventNames, listener) {
	var events = eventNames.split(' ');
	for (var i = 0, iLen = events.length; i < iLen; i++) {
		element.addEventListener(events[i], listener, false);
	}
}

// ----------------------------------------------------
export const even = n => !(n % 2);
// ----------------------------------------------------
export const removeCustomClass = (item, customClass = 'active') => {
	const classes = customClass.split(',').map(cls => cls.trim());
	classes.forEach(className => {
		item.classList.remove(className);
	});
}

// ----------------------------------------------------
export const toggleCustomClass = (item, customClasses = 'active') => {
	const classes = customClasses.split(',').map(cls => cls.trim());
	classes.forEach(className => {
		item.classList.toggle(className);
	});
}

// ----------------------------------------------------
export const addCustomClass = (item, customClass = 'active') => {
	const classes = customClass.split(',').map(cls => cls.trim());
	classes.forEach(className => {
		item.classList.add(className);
	});
}

// ----------------------------------------------------
export const removeClassInArray = (arr, customClass = 'active') => {
	const classes = customClass.split(',').map(cls => cls.trim());
	arr.forEach((item) => {
		classes.forEach(className => {
			item.classList.remove(className);
		});
	});
}

// ----------------------------------------------------
export const addClassInArray = (arr, customClass = 'active') => {
	const classes = customClass.split(',').map(cls => cls.trim());
	arr.forEach((item) => {
		classes.forEach(className => {
			item.classList.add(className);
		});
	});
}

// ----------------------------------------------------
export const toggleClassInArray = (arr, customClass = 'active') => {
	const classes = customClass.split(',').map(cls => cls.trim());
	arr.forEach((item) => {
		classes.forEach(className => {
			item.classList.toggle(className);
		});
	});
}

//-----------------------------------------------------

export const elementHeight = (el, variableName) => {
	// el -- сам елемент (но не коллекция)
	// variableName -- строка, имя создаваемой переменной
	if (el) {
		function initListener() {
			const elementHeight = el.offsetHeight;
			document.querySelector(':root').style.setProperty(`--${variableName}`, `${elementHeight}px`);
		}

		window.addEventListener('DOMContentLoaded', initListener)
		window.addEventListener('resize', initListener)
	}
}

export const elementWidth = (el, variableName) => {
	// el -- сам элемент (но не коллекция)
	// variableName -- строка, имя создаваемой переменной
	if (el) {
		function initListener() {
			const elementWidth = el.offsetWidth;
			document.querySelector(':root').style.setProperty(`--${variableName}`, `${elementWidth}px`);
		}

		window.addEventListener('DOMContentLoaded', initListener);
		window.addEventListener('resize', initListener);
	}
};


//-----------------------------------------------------

export const stickyHeader = (block, duration, delay, type, offset = 0, scrollThreshold = 40) => {
	let lastScrollTop = 0;
	let accumulatedScroll = 0;

	block.style.transition = `all ${duration}ms ${type}`;

	const updateHeaderPosition = () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll > block.offsetHeight + offset) {
			if (currentScroll > lastScrollTop) {
				block.style.top = `-${block.offsetHeight}px`;
				block.style.transitionDelay = '0ms';
				accumulatedScroll = 0;
			} else {
				accumulatedScroll += lastScrollTop - currentScroll;

				if (accumulatedScroll >= scrollThreshold) {
					block.style.top = '0';
					block.style.transitionDelay = `${delay}ms`;
					accumulatedScroll = 0;
				}
			}
		} else {
			block.style.top = '0';
			block.style.transitionDelay = '0ms';
		}

		lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
	};
	const debounce = (func, wait) => {
		let timeout;

		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};

	const debouncedUpdateHeader = debounce(updateHeaderPosition, 10);

	window.addEventListener('scroll', debouncedUpdateHeader);
};

export const scrollToSection = (sectionSelector, action) => {
	const section = document.querySelector(sectionSelector);

	window.addEventListener('scroll', () => {
		if (!section) return;

		const rect = section.getBoundingClientRect();

		if (rect.top <= window.innerHeight && rect.bottom >= 0) {
			action();
		}
	});
};

