import { describe, it, expect } from 'vitest'
import { timeToNumber } from '@/utils/time';

describe('timeToNumber', () => {
    it('converts time string to number correctly', () => {
        expect(timeToNumber('12:30')).toBe(1230)
    });

    it('handles different hour formats', () => {
        expect(timeToNumber('9:30')).toBe(930)
        expect(timeToNumber('09:30')).toBe(930)
    });

    it('handles time without leading zeros', () => {
        expect(timeToNumber('9:05')).toBe(905)
    });

    it('handles time at midnight', () => {
        expect(timeToNumber('00:00')).toBe(0)
    });

    it('handles time near midnight', () => {
        expect(timeToNumber('23:59')).toBe(2359)
    });
});
