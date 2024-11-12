import { describe, it, expect } from 'vitest';
import { ROUTE, PLACEHOLDER, ORDER } from '@/enums';

describe('Enums', () => {
    describe('ROUTE', () => {
        it('should have correct home route', () => {
            expect(ROUTE.home).toBe('/');
        });

        it('should have correct stops route', () => {
            expect(ROUTE.stops).toBe('stops');
        });
    });

    describe('PLACEHOLDER', () => {
        it('should have correct bus stop placeholder', () => {
            expect(PLACEHOLDER.bus_stop).toBe('Please select the bus stop first');
        });

        it('should have correct bus line placeholder', () => {
            expect(PLACEHOLDER.bus_line).toBe('Please select the bus line first');
        });
    });

    describe('ORDER', () => {
        it('should have correct ascending order', () => {
            expect(ORDER.asc).toBe('asc');
        });

        it('should have correct descending order', () => {
            expect(ORDER.desc).toBe('desc');
        });
    });

    describe('Type safety', () => {
        it('ROUTE should only have defined properties', () => {
            const keys = Object.keys(ROUTE);
            expect(keys).toHaveLength(2);
            expect(keys).toEqual(['home', 'stops']);
        });

        it('PLACEHOLDER should only have defined properties', () => {
            const keys = Object.keys(PLACEHOLDER);
            expect(keys).toHaveLength(2);
            expect(keys).toEqual(['bus_stop', 'bus_line']);
        });

        it('ORDER should only have defined properties', () => {
            const keys = Object.keys(ORDER);
            expect(keys).toHaveLength(2);
            expect(keys).toEqual(['asc', 'desc']);
        });
    });
});
